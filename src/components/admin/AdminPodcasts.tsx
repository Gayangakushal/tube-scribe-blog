
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Edit, Plus } from "lucide-react";

interface Podcast {
  id: string;
  title: string;
  description: string;
  audio_url?: string;
  duration?: string;
  episode_number?: number;
  language: string;
  status: 'draft' | 'published';
  created_at: string;
}

const AdminPodcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPodcast, setEditingPodcast] = useState<Podcast | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    audio_url: "",
    duration: "",
    episode_number: "",
    language: "English",
    status: "draft" as "draft" | "published"
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const fetchPodcasts = async () => {
    const { data, error } = await supabase
      .from("podcasts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch podcasts",
        variant: "destructive",
      });
    } else {
      setPodcasts(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const submitData = {
      ...formData,
      episode_number: formData.episode_number ? parseInt(formData.episode_number) : null
    };

    if (editingPodcast) {
      const { error } = await supabase
        .from("podcasts")
        .update(submitData)
        .eq("id", editingPodcast.id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update podcast",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Podcast updated successfully",
        });
        resetForm();
        fetchPodcasts();
      }
    } else {
      const { error } = await supabase
        .from("podcasts")
        .insert([submitData]);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to create podcast",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Podcast created successfully",
        });
        resetForm();
        fetchPodcasts();
      }
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from("podcasts")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete podcast",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Podcast deleted successfully",
      });
      fetchPodcasts();
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      audio_url: "",
      duration: "",
      episode_number: "",
      language: "English",
      status: "draft"
    });
    setShowForm(false);
    setEditingPodcast(null);
  };

  const startEdit = (podcast: Podcast) => {
    setEditingPodcast(podcast);
    setFormData({
      title: podcast.title,
      description: podcast.description || "",
      audio_url: podcast.audio_url || "",
      duration: podcast.duration || "",
      episode_number: podcast.episode_number?.toString() || "",
      language: podcast.language,
      status: podcast.status
    });
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Podcasts</h2>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-white text-black hover:bg-gray-200"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Podcast
        </Button>
      </div>

      {showForm && (
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">
              {editingPodcast ? "Edit Podcast" : "Create New Podcast"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Podcast Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
              <Textarea
                placeholder="Podcast Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
                rows={4}
              />
              <Input
                placeholder="Audio URL"
                value={formData.audio_url}
                onChange={(e) => setFormData({ ...formData, audio_url: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Duration (e.g., 45:30)"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Input
                  placeholder="Episode Number"
                  type="number"
                  value={formData.episode_number}
                  onChange={(e) => setFormData({ ...formData, episode_number: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white p-2 rounded"
                >
                  <option value="English">English</option>
                  <option value="Sinhala">Sinhala</option>
                </select>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as "draft" | "published" })}
                  className="bg-gray-800 border-gray-700 text-white p-2 rounded"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                  {editingPodcast ? "Update" : "Create"}
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
        {podcasts.map((podcast) => (
          <Card key={podcast.id} className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{podcast.title}</h3>
                  <p className="text-gray-400 mt-1">{podcast.description}</p>
                  <div className="flex space-x-4 mt-2 text-sm text-gray-500">
                    <span>Episode: {podcast.episode_number || "N/A"}</span>
                    <span>Duration: {podcast.duration || "N/A"}</span>
                    <span>Language: {podcast.language}</span>
                    <span>Status: {podcast.status}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => startEdit(podcast)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(podcast.id)}
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

export default AdminPodcasts;
