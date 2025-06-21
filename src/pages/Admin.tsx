
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import AdminPosts from "@/components/admin/AdminPosts";
import AdminPodcasts from "@/components/admin/AdminPodcasts";
import AdminVideos from "@/components/admin/AdminVideos";
import AdminClothes from "@/components/admin/AdminClothes";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (adminToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simple authentication check (in production, use proper password hashing)
      if (username === "admin" && password === "admin123") {
        localStorage.setItem("adminToken", "authenticated");
        setIsLoggedIn(true);
        toast({
          title: "Login successful",
          description: "Welcome to the admin dashboard!",
        });
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Login failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white text-center">Fergando Admin</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Fergando Admin Dashboard</h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black"
          >
            Logout
          </Button>
        </div>

        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList className="bg-gray-900 border-gray-800">
            <TabsTrigger value="posts" className="data-[state=active]:bg-white data-[state=active]:text-black">
              Blog Posts
            </TabsTrigger>
            <TabsTrigger value="podcasts" className="data-[state=active]:bg-white data-[state=active]:text-black">
              Podcasts
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-white data-[state=active]:text-black">
              Videos
            </TabsTrigger>
            <TabsTrigger value="clothes" className="data-[state=active]:bg-white data-[state=active]:text-black">
              Clothes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts">
            <AdminPosts />
          </TabsContent>

          <TabsContent value="podcasts">
            <AdminPodcasts />
          </TabsContent>

          <TabsContent value="videos">
            <AdminVideos />
          </TabsContent>

          <TabsContent value="clothes">
            <AdminClothes />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
