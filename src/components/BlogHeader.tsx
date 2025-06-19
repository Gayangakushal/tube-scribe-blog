
import { Youtube, Search } from "lucide-react";

const BlogHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Youtube className="h-8 w-8 text-red-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">My Channel Blog</h1>
                <p className="text-sm text-gray-500">Creator Insights & Updates</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Videos</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
