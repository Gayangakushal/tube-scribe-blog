import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Edit, Plus } from "lucide-react";

interface Post {
  id: string;
  title: string;
  description: string | null;
  image_url?: string | null;
  post_type: string;
  status: string | null;
  created_at: string;
  video_enabled?: boolean | null;
  video_url?: string | null;
  updated_at: string;
}

const AdminPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    post_type: "blog" as "blog" | "video",
    status: "draft" as "draft" | "published"
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch posts",
        variant: "destructive",
      });
    } else {
      setPosts(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPost) {
      const { error } = await supabase
        .from("posts")
        .update(formData)
        .eq("id", editingPost.id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update post",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Post updated successfully",
        });
        resetForm();
        fetchPosts();
      }
    } else {
      const { error } = await supabase
        .from("posts")
        .insert([formData]);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to create post",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Post created successfully",
        });
        resetForm();
        fetchPosts();
      }
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from("posts")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Post deleted successfully",
      });
      fetchPosts();
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      image_url: "",
      post_type: "blog",
      status: "draft"
    });
    setShowForm(false);
    setEditingPost(null);
  };

  const startEdit = (post: Post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      description: post.description || "",
      image_url: post.image_url || "",
      post_type: (post.post_type as "blog" | "video") || "blog",
      status: (post.status as "draft" | "published") || "draft"
    });
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Blog Posts</h2>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-white text-black hover:bg-gray-200"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Post
        </Button>
      </div>

      {showForm && (
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">
              {editingPost ? "Edit Post" : "Create New Post"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Post Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
                required
              />
              <Textarea
                placeholder="Post Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
                rows={4}
              />
              <Input
                placeholder="Image URL"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                className="bg-gray-800 border-gray-700 text-white"
              />
              <div className="grid grid-cols-2 gap-4">
                <select
                  value={formData.post_type}
                  onChange={(e) => setFormData({ ...formData, post_type: e.target.value as "blog" | "video" })}
                  className="bg-gray-800 border-gray-700 text-white p-2 rounded"
                >
                  <option value="blog">Blog</option>
                  <option value="video">Video</option>
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
                  {editingPost ? "Update" : "Create"}
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
        {posts.map((post) => (
          <Card key={post.id} className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{post.title}</h3>
                  <p className="text-gray-400 mt-1">{post.description}</p>
                  <div className="flex space-x-4 mt-2 text-sm text-gray-500">
                    <span>Type: {post.post_type}</span>
                    <span>Status: {post.status}</span>
                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => startEdit(post)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(post.id)}
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

export default AdminPosts;
