
import { Mail, Youtube, Instagram, Music } from "lucide-react";

const SubscribeSection = () => {
  return (
    <section className="py-16 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join the Community</h2>
          <p className="text-gray-400 text-lg mb-12">
            Get updates on new episodes & exclusive paranormal content
          </p>

          <div className="bg-gradient-to-r from-[#0A0F29] to-[#1a1a2e] rounded-2xl p-8 border border-gray-800 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Newsletter</h3>
                <p className="text-gray-400 mb-6">
                  Be the first to know about new investigations, exclusive stories, and behind-the-scenes content.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 bg-[#111111] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#E31C25] focus:outline-none"
                  />
                  <button className="bg-[#E31C25] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C41E20] transition-colors flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <div className="bg-[#E31C25]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto md:ml-auto mb-4">
                  <Mail className="h-12 w-12 text-[#E31C25]" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Follow on Social Media</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="bg-[#0A0F29] p-4 rounded-full border border-gray-800 hover:border-[#E31C25] hover:bg-[#E31C25]/10 transition-all duration-300 group">
                <Youtube className="h-6 w-6 text-gray-400 group-hover:text-[#E31C25]" />
              </a>
              <a href="#" className="bg-[#0A0F29] p-4 rounded-full border border-gray-800 hover:border-[#E31C25] hover:bg-[#E31C25]/10 transition-all duration-300 group">
                <Music className="h-6 w-6 text-gray-400 group-hover:text-[#E31C25]" />
              </a>
              <a href="#" className="bg-[#0A0F29] p-4 rounded-full border border-gray-800 hover:border-[#E31C25] hover:bg-[#E31C25]/10 transition-all duration-300 group">
                <Instagram className="h-6 w-6 text-gray-400 group-hover:text-[#E31C25]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
