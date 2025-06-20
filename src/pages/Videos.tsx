
import FergandoHeader from "@/components/FergandoHeader";
import FergandoFooter from "@/components/FergandoFooter";
import { Play, Eye, Calendar } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "REAL Ghost Investigation - Haunted Mansion Kandy",
    description: "Live investigation of Sri Lanka's most haunted mansion with actual paranormal activity caught on camera.",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    duration: "28:45",
    views: "125K",
    date: "3 days ago",
    featured: true
  },
  {
    id: 2,
    title: "Galle Fort Ghost Stories - Colonial Spirits",
    description: "Exploring the haunted history of Galle Fort and encounters with colonial era ghosts.",
    thumbnail: "https://images.unsplash.com/photo-1520637836862-4d197d17c787?w=800",
    duration: "22:15",
    views: "89K",
    date: "1 week ago"
  },
  {
    id: 3,
    title: "EVP Session - Voices from Beyond",
    description: "Electronic Voice Phenomena captured during recent investigations with analysis.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
    duration: "18:30",
    views: "67K",
    date: "2 weeks ago"
  },
  {
    id: 4,
    title: "Temple Investigation - Ancient Mysteries",
    description: "Paranormal investigation at an ancient Buddhist temple with unexplained phenomena.",
    thumbnail: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800",
    duration: "35:20",
    views: "156K",
    date: "3 weeks ago"
  },
  {
    id: 5,
    title: "Ghost Equipment Review - 2024 Guide",
    description: "Complete review of paranormal investigation equipment and how to use them effectively.",
    thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800",
    duration: "15:45",
    views: "43K",
    date: "1 month ago"
  },
  {
    id: 6,
    title: "Listener Stories - Real Encounters",
    description: "Real paranormal experiences shared by viewers from across Sri Lanka.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
    duration: "42:10",
    views: "92K",
    date: "1 month ago"
  }
];

const Videos = () => {
  const featuredVideo = videos.find(video => video.featured);
  const regularVideos = videos.filter(video => !video.featured);

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <FergandoHeader />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#0A0F29] to-[#111111]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Paranormal <span className="text-[#E31C25]">Videos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real investigations caught on camera - witness the unexplained
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      {featuredVideo && (
        <section className="py-16 bg-[#111111]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-[#0A0F29] to-[#1a1a2e] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#E31C25]/50 transition-all duration-500 group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto relative overflow-hidden">
                    <img 
                      src={featuredVideo.thumbnail} 
                      alt={featuredVideo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-[#E31C25] w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {featuredVideo.duration}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-[#E31C25] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        FEATURED
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-[#E31C25] transition-colors">
                      {featuredVideo.title}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredVideo.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{featuredVideo.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredVideo.date}</span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-[#E31C25] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C41E20] transition-colors flex items-center justify-center space-x-2 w-fit">
                      <Play className="h-4 w-4" />
                      <span>Watch on YouTube</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Videos Grid */}
      <section className="py-16 bg-gradient-to-b from-[#111111] to-[#0A0F29]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Latest <span className="text-[#E31C25]">Investigations</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularVideos.map((video, index) => (
                <div 
                  key={video.id} 
                  className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-xl overflow-hidden border border-gray-800 hover:border-[#E31C25]/50 transition-all duration-500 hover:transform hover:scale-105 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#E31C25] w-12 h-12 rounded-full flex items-center justify-center">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-[#E31C25] transition-colors">
                      {video.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {video.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{video.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{video.date}</span>
                        </div>
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

export default Videos;
