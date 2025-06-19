
import BlogCard from "./BlogCard";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

const BlogGrid = ({ posts }: BlogGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;
