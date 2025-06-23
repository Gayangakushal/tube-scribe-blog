
import { useState } from "react";
import { Play, Pause, Clock, Calendar } from "lucide-react";

const episodes = [
  {
    id: 1,
    title: "The Haunted Mansion of Kandy",
    description: "Real investigation of one of Sri Lanka's most haunted locations with actual evidence and encounters.",
    duration: "45:32",
    date: "Dec 20, 2024",
    language: "Sinhala",
    featured: true,
    audioUrl: "#"
  },
  {
    id: 2,
    title: "Galle Fort Ghost Stories",
    description: "Colonial era spirits that still roam the historic fort, with witness testimonies.",
    duration: "38:15",
    date: "Dec 18, 2024",
    language: "English",
    audioUrl: "#"
  },
  {
    id: 3,
    title: "Temple Mysteries of Anuradhapura",
    description: "Ancient sacred sites and the unexplained phenomena witnessed by pilgrims.",
    duration: "52:20",
    date: "Dec 15, 2024",
    language: "Sinhala",
    audioUrl: "#"
  }
];

const PodcastSection = () => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const featuredEpisode = episodes.find(ep => ep.featured);
  const regularEpisodes = episodes.filter(ep => !ep.featured);

  const togglePlay = (episodeId: number) => {
    if (currentPlaying === episodeId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentPlaying(episodeId);
      setIsPlaying(true);
    }
  };

  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Paranormal <span className="text-white">Podcast</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories, real investigations, real encounters from the world beyond
          </p>
        </div>

        {/* Featured Episode */}
        {featuredEpisode && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                  LATEST EPISODE
                </span>
              </div>
              
              <div className="aspect-video bg-gray-700 rounded-xl flex items-center justify-center border border-gray-600 mb-8">
                <div className="text-center">
                  <button 
                    onClick={() => togglePlay(featuredEpisode.id)}
                    className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform duration-500"
                  >
                    {currentPlaying === featuredEpisode.id && isPlaying ? (
                      <Pause className="h-10 w-10 text-black ml-1" />
                    ) : (
                      <Play className="h-10 w-10 text-black ml-1" />
                    )}
                  </button>
                  <p className="text-gray-400">Click to play episode</p>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
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
                  <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                    {featuredEpisode.language}
                  </span>
                </div>

                <button 
                  onClick={() => togglePlay(featuredEpisode.id)}
                  className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 mx-auto"
                >
                  {currentPlaying === featuredEpisode.id && isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  <span>{currentPlaying === featuredEpisode.id && isPlaying ? 'Pause Episode' : 'Play Episode'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Episodes List */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            All <span className="text-white">Episodes</span>
          </h2>
          
          <div className="space-y-6">
            {regularEpisodes.map((episode, index) => (
              <div 
                key={episode.id}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => togglePlay(episode.id)}
                    className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors"
                  >
                    {currentPlaying === episode.id && isPlaying ? (
                      <Pause className="h-8 w-8 text-white" />
                    ) : (
                      <Play className="h-8 w-8 text-white" />
                    )}
                  </button>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
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
                      <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs">
                        {episode.language}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audio Player Bar */}
        {currentPlaying && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 z-40">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => togglePlay(currentPlaying)}
                  className="bg-white w-12 h-12 rounded-full flex items-center justify-center"
                >
                  {isPlaying ? <Pause className="h-6 w-6 text-black" /> : <Play className="h-6 w-6 text-black ml-1" />}
                </button>
                <div>
                  <h4 className="text-white font-semibold">
                    {episodes.find(ep => ep.id === currentPlaying)?.title}
                  </h4>
                  <p className="text-gray-400 text-sm">Now Playing</p>
                </div>
              </div>
              <div className="flex-1 mx-8">
                <div className="bg-gray-700 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full w-1/4"></div>
                </div>
              </div>
              <div className="text-gray-400 text-sm">
                {episodes.find(ep => ep.id === currentPlaying)?.duration}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PodcastSection;
