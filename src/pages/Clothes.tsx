
import { useState } from "react";
import FergandoHeader from "@/components/FergandoHeader";
import FergandoFooter from "@/components/FergandoFooter";
import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageCircle } from "lucide-react";

// Sample clothes data - in a real app, this would come from your database
const sampleClothes = [
  {
    id: 1,
    name: "Classic Black T-Shirt",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Comfortable cotton t-shirt perfect for everyday wear."
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Stylish denim jacket for a casual look."
  },
  {
    id: 3,
    name: "Summer Dress",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Light and breezy summer dress."
  }
];

const Clothes = () => {
  const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number

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
          {sampleClothes.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
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
      </main>

      <FergandoFooter />
    </div>
  );
};

export default Clothes;
