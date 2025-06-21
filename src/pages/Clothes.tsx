
import { useState, useEffect } from "react";
import FergandoHeader from "@/components/FergandoHeader";
import FergandoFooter from "@/components/FergandoFooter";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface ClothingItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
}

const Clothes = () => {
  const [clothes, setClothes] = useState<ClothingItem[]>([]);
  const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number

  useEffect(() => {
    fetchClothes();
  }, []);

  const fetchClothes = async () => {
    const { data, error } = await supabase
      .from("clothes")
      .select("*")
      .eq("status", "published")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setClothes(data);
    }
  };

  const handleWhatsAppContact = (itemName: string, price: number) => {
    const message = `Hi! I'm interested in purchasing the ${itemName} for $${price}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <FergandoHeader />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Clothing Collection</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our exclusive collection of high-quality clothing items. 
            Contact us through WhatsApp to place your order.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clothes.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image_url || "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">${item.price}</span>
                  <Button 
                    onClick={() => handleWhatsAppContact(item.name, item.price)}
                    className="bg-black border border-white text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Buy via WhatsApp</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {clothes.length === 0 && (
          <div className="text-center text-gray-400">
            <p>No clothing items available yet. Check back soon!</p>
          </div>
        )}
      </main>

      <FergandoFooter />
    </div>
  );
};

export default Clothes;
