
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Edit, Plus } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  youtube_url: string;
  thumbnail_url?: string;
  status: 'draft' | 'published';
  created_at: string;
}

const AdminVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    youtube_url: "",
    thumbnail_url: "",
    status: "draft" as "draft" | "published"
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch videos",
        variant: "destructive",
      });
    } else {
      setVideos(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingVideo) {
      const { error } = await supabase
        .from("videos")
        .update(formData)
        .eq("id", editingVideo.id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update video",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Video updated successfully",
        });
        resetForm();
        fetchVideos();
      }
    } else {
      const { error } = await supabase
        .from("videos")
        .insert([formData]);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to create video",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Video created successfully",
        });
        resetForm();
        fetchVideos();
      }
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from("videos")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete video",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Video deleted successfully",
      });
      fetchVideos();
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      youtube_url: "",
      thumbnail_url: "",
      status: "draft"
    });
    setShowForm(false);
    setEditingVideo(null);
  };

  const startEdit = (video: Video) => {
    setEditingVideo(video);
    setFormData({
      title: video.title,
      description: video.description || "",
      youtube_url: video.youtube_url,
      thumbnail_url: video.thumbnail_url || "",
      status: video.status
    });
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Videos</h2>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-white text-black hover:bg-gray-200"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Video
        </Button>
      </div>

      {showForm && (
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">
              {editingVideo ? "Edit Video" : "Create New Video"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Video Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
              <Textarea
                placeholder="Video Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
                rows={4}
              />
              <Input
                placeholder="YouTube URL"
                value={formData.youtube_url}
                onChange={(e) => setFormData({ ...formData, youtube_url: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
              <Input
                placeholder="Thumbnail URL"
                value={formData.thumbnail_url}
                onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
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
                  {editingVideo ? "Update" : "Create"}
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
        {videos.map((video) => (
          <Card key={video.id} className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                  <p className="text-gray-400 mt-1">{video.description}</p>
                  <div className="flex space-x-4 mt-2 text-sm text-gray-500">
                    <span>Status: {video.status}</span>
                    <span>{new Date(video.created_at).toLocaleDateString()}</span>
                  </div>
                  <a 
                    href={video.youtube_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    Watch on YouTube
                  </a>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => startEdit(video)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(video.id)}
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

export default AdminVideos;
