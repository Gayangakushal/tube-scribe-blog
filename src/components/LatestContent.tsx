
import { Calendar, Play, Mic, FileText } from "lucide-react";

const mockContent = [
  {
    id: 1,
    title: "The Haunted Mansion of Kandy",
    category: 'Video',
    type: 'Video',
    excerpt: 'Real investigation of one of Sri Lanka\'s most haunted locations with actual evidence and encounters.',
    date: 'Dec 20, 2024',
    language: 'Sinhala',
    icon: Play,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: "Galle Fort Ghost Stories",
    category: 'Podcast',
    type: 'Podcast',
    excerpt: 'Colonial era spirits that still roam the historic fort, with witness testimonies.',
    date: 'Dec 18, 2024',
    language: 'English',
    icon: Mic,
    audioUrl: '#'
  }
];

const LatestContent = () => {
  const openVideo = (videoUrl: string) => {
    if (videoUrl && videoUrl.includes('youtube')) {
      window.open(videoUrl.replace('embed/', 'watch?v='), '_blank');
    }
  };

  const playPodcast = (audioUrl: string) => {
    // Implement podcast player
    console.log('Playing podcast:', audioUrl);
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Episodes & Videos</h2>
          <p className="text-gray-400 text-lg">Fresh paranormal content to keep you on edge</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mockContent.map((item) => (
            <article 
              key={item.id} 
              className="bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
              onClick={() => item.type === 'Video' ? openVideo(item.videoUrl || '') : playPodcast(item.audioUrl || '')}
            >
              <div className="aspect-video bg-gray-800 rounded-t-xl flex items-center justify-center border-b border-gray-800">
                <item.icon className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-xs">{item.language}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-gray-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{item.date}</span>
                  </div>
                  <span className="text-white font-semibold">{item.type}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestContent;
