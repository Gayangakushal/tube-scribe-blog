
import { Menu, Headphones } from "lucide-react";

const FergandoHeader = () => {
  return (
    <header className="bg-[#0A0F29]/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              <span className="text-[#E31C25]">Fergando</span> Official
            </h1>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-[#E31C25] transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:text-[#E31C25] transition-colors font-medium">Podcast</a>
            <a href="#" className="text-gray-300 hover:text-[#E31C25] transition-colors font-medium">Blog</a>
            <a href="#" className="text-gray-300 hover:text-[#E31C25] transition-colors font-medium">Videos</a>
            <a href="#" className="text-gray-300 hover:text-[#E31C25] transition-colors font-medium">About</a>
            <a href="#" className="text-gray-300 hover:text-[#E31C25] transition-colors font-medium">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="bg-[#E31C25] text-white px-6 py-2 rounded-full hover:bg-[#C41E20] transition-colors font-medium flex items-center space-x-2">
              <Headphones className="h-4 w-4" />
              <span>Listen Now</span>
            </button>
            <button className="lg:hidden p-2 text-gray-300 hover:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FergandoHeader;
