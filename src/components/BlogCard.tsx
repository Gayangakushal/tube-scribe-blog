
import { Clock, Calendar } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <h3 className="text-white text-lg font-semibold text-center px-4">
            {post.title}
          </h3>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Read More
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
