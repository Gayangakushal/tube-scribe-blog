
import FergandoHeader from "@/components/FergandoHeader";
import FergandoFooter from "@/components/FergandoFooter";
import { Play, Headphones, Clock, Calendar } from "lucide-react";

const episodes = [
  {
    id: 1,
    title: "The Haunted Mansion of Kandy",
    description: "Real investigation of one of Sri Lanka's most haunted locations with actual evidence and encounters.",
    duration: "45:32",
    date: "Dec 20, 2024",
    language: "Sinhala",
    featured: true
  },
  {
    id: 2,
    title: "Galle Fort Ghost Stories",
    description: "Colonial era spirits that still roam the historic fort, with witness testimonies.",
    duration: "38:15",
    date: "Dec 18, 2024",
    language: "English"
  },
  {
    id: 3,
    title: "Temple Mysteries of Anuradhapura",
    description: "Ancient sacred sites and the unexplained phenomena witnessed by pilgrims.",
    duration: "52:20",
    date: "Dec 15, 2024",
    language: "Sinhala"
  },
  {
    id: 4,
    title: "EVP Evidence Analysis",
    description: "Breaking down electronic voice phenomena captured during investigations.",
    duration: "35:45",
    date: "Dec 12, 2024",
    language: "English"
  }
];

const Podcast = () => {
  const featuredEpisode = episodes.find(ep => ep.featured);
  const regularEpisodes = episodes.filter(ep => !ep.featured);

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <FergandoHeader />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#0A0F29] to-[#111111]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Paranormal <span className="text-[#E31C25]">Podcast</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real stories, real investigations, real encounters from the world beyond
            </p>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      {featuredEpisode && (
        <section className="py-16 bg-[#111111]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-[#0A0F29] to-[#1a1a2e] rounded-2xl p-8 border border-gray-800 hover:border-[#E31C25]/50 transition-all duration-500 group">
                <div className="text-center mb-8">
                  <span className="bg-[#E31C25] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    LATEST EPISODE
                  </span>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-[#E31C25]/20 to-[#0A0F29]/20 rounded-xl flex items-center justify-center border border-gray-700 mb-8 group-hover:border-[#E31C25]/50 transition-all duration-500">
                  <div className="text-center">
                    <div className="bg-[#E31C25] w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500">
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                    <p className="text-gray-400">Click to play episode</p>
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-[#E31C25] transition-colors">
                    {featuredEpisode.title}
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {featuredEpisode.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-6 mb-8 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredEpisode.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredEpisode.date}</span>
                    </div>
                    <span className="bg-[#E31C25]/20 text-[#E31C25] px-3 py-1 rounded-full text-sm">
                      {featuredEpisode.language}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-[#E31C25] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C41E20] transition-colors flex items-center justify-center space-x-2">
                      <Play className="h-5 w-5" />
                      <span>Play Episode</span>
                    </button>
                    <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-[#E31C25] hover:text-[#E31C25] transition-colors flex items-center justify-center space-x-2">
                      <Headphones className="h-5 w-5" />
                      <span>Listen on Spotify</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Episodes List */}
      <section className="py-16 bg-gradient-to-b from-[#111111] to-[#0A0F29]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              All <span className="text-[#E31C25]">Episodes</span>
            </h2>
            
            <div className="space-y-6">
              {regularEpisodes.map((episode, index) => (
                <div 
                  key={episode.id}
                  className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-xl p-6 border border-gray-800 hover:border-[#E31C25]/50 transition-all duration-500 hover:transform hover:scale-105 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-6">
                    <div className="bg-[#E31C25]/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-[#E31C25]/20 transition-colors">
                      <Play className="h-8 w-8 text-[#E31C25]" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E31C25] transition-colors">
                        {episode.title}
                      </h3>
                      <p className="text-gray-400 mb-3">
                        {episode.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{episode.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{episode.date}</span>
                        </div>
                        <span className="bg-[#E31C25]/20 text-[#E31C25] px-2 py-1 rounded-full text-xs">
                          {episode.language}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FergandoFooter />
    </div>
  );
};

export default Podcast;
