
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Edit, Plus } from "lucide-react";

interface ClothingItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url?: string | null;
  status: string | null;
  created_at: string;
  updated_at: string;
}

const AdminClothes = () => {
  const [clothes, setClothes] = useState<ClothingItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<ClothingItem | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image_url: "",
    status: "draft" as "draft" | "published"
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchClothes();
  }, []);

  const fetchClothes = async () => {
    const { data, error } = await supabase
      .from("clothes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch clothes",
        variant: "destructive",
      });
    } else {
      setClothes(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const submitData = {
      ...formData,
      price: parseFloat(formData.price)
    };

    if (editingItem) {
      const { error } = await supabase
        .from("clothes")
        .update(submitData)
        .eq("id", editingItem.id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update clothing item",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Clothing item updated successfully",
        });
        resetForm();
        fetchClothes();
      }
    } else {
      const { error } = await supabase
        .from("clothes")
        .insert([submitData]);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to create clothing item",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Clothing item created successfully",
        });
        resetForm();
        fetchClothes();
      }
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from("clothes")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete clothing item",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Clothing item deleted successfully",
      });
      fetchClothes();
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      image_url: "",
      status: "draft"
    });
    setShowForm(false);
    setEditingItem(null);
  };

  const startEdit = (item: ClothingItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description || "",
      price: item.price.toString(),
      image_url: item.image_url || "",
      status: item.status
    });
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Clothing Items</h2>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-white text-black hover:bg-gray-200"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </div>

      {showForm && (
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">
              {editingItem ? "Edit Clothing Item" : "Create New Clothing Item"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Item Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
              <Textarea
                placeholder="Item Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
                rows={4}
              />
              <Input
                placeholder="Price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
              <Input
                placeholder="Image URL"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
              />
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as "draft" | "published" })}
                className="bg-gray-800 border-gray-700 text-white p-2 rounded w-full"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
              <div className="flex space-x-2">
                <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                  {editingItem ? "Update" : "Create"}
                </Button>
                <Button type="button" onClick={resetForm} variant="outline">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {clothes.map((item) => (
          <Card key={item.id} className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="text-gray-400 mt-1">{item.description}</p>
                  <div className="flex space-x-4 mt-2 text-sm text-gray-500">
                    <span>Price: ${item.price}</span>
                    <span>Status: {item.status}</span>
                    <span>{new Date(item.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => startEdit(item)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(item.id)}
                    className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminClothes;
