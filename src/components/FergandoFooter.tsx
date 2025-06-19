
import { Youtube, Instagram, Music } from "lucide-react";

const FergandoFooter = () => {
  return (
    <footer className="bg-[#0A0F29] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-[#E31C25]">Fergando</span> Official
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Exploring the paranormal world through real investigations, authentic stories, 
              and evidence-based research. Join us on this journey into the unknown.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#E31C25] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E31C25] transition-colors">
                <Music className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E31C25] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#E31C25] transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E31C25] transition-colors">Podcast</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E31C25] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E31C25] transition-colors">Videos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#E31C25] transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E31C25] transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E31C25] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E31C25] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 Fergando Official – All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FergandoFooter;
