
import { Play, Headphones } from "lucide-react";

const FeaturedContent = () => {
  return (
    <section className="py-16 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#0A0F29] to-[#1a1a2e] rounded-2xl p-8 border border-gray-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Play className="h-5 w-5 text-[#E31C25]" />
                  <span className="text-[#E31C25] font-semibold">FEATURED VIDEO</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  The Haunted Mansion of Kandy: Real Investigation
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Join Fergando as he explores one of Sri Lanka's most haunted locations. Real evidence, real encounters, real fear.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#E31C25] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C41E20] transition-colors flex items-center justify-center space-x-2">
                    <Play className="h-4 w-4" />
                    <span>Watch on YouTube</span>
                  </button>
                  <button className="border border-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:border-[#E31C25] hover:text-[#E31C25] transition-colors flex items-center justify-center space-x-2">
                    <Headphones className="h-4 w-4" />
                    <span>Listen on Spotify</span>
                  </button>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-[#E31C25]/20 to-[#0A0F29]/20 rounded-xl flex items-center justify-center border border-gray-700">
                <Play className="h-16 w-16 text-[#E31C25] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
