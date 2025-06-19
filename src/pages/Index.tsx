
import BlogHeader from "@/components/BlogHeader";
import BlogGrid from "@/components/BlogGrid";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Posts</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Welcome to my blog! Here you'll find insights, tutorials, and updates about my YouTube channel content.
          </p>
        </div>
        <BlogGrid posts={blogPosts} />
      </main>
    </div>
  );
};

export default Index;
