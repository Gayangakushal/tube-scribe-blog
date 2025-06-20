
import { Youtube, Instagram, Music } from "lucide-react";
import { Link } from "react-router-dom";

const FergandoFooter = () => {
  return (
    <footer className="bg-[#0A0F29] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/233b61f8-7947-45c4-9b78-d23b0362de6a.png" 
                alt="Fergando Logo" 
                className="h-12 w-auto opacity-80"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Exploring the paranormal world through real investigations, authentic stories, 
              and evidence-based research. Join us on this journey into the unknown.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#E31C25] transition-all duration-300 hover:scale-110">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E31C25] transition-all duration-300 hover:scale-110">
                <Music className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E31C25] transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#E31C25] transition-colors">Home</Link></li>
              <li><Link to="/podcast" className="text-gray-400 hover:text-[#E31C25] transition-colors">Podcast</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-[#E31C25] transition-colors">Blog</Link></li>
              <li><Link to="/videos" className="text-gray-400 hover:text-[#E31C25] transition-colors">Videos</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-[#E31C25] transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#E31C25] transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E31C25] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E31C25] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 Fergando – All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FergandoFooter;
