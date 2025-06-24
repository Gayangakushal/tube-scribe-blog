
import { Calendar, Play, Mic, FileText } from "lucide-react";

// Mock data for latest content
const mockPosts = [
  {
    id: "1",
    title: "The Haunted Temple of Kataragama",
    description: "Deep dive into one of Sri Lanka's most spiritually charged locations",
    post_type: "blog",
    created_at: "2024-12-20T00:00:00Z"
  },
  {
    id: "2",
    title: "Galle Fort Investigation",
    description: "Exploring colonial era spirits in this historic location",
    post_type: "video",
    created_at: "2024-12-18T00:00:00Z"
  }
];

const mockPodcasts = [
  {
    id: "1",
    title: "Voices from Beyond",
    description: "EVP evidence from recent investigations",
    language: "English",
    created_at: "2024-12-15T00:00:00Z"
  },
  {
    id: "2",
    title: "Ancient Mysteries",
    description: "Unexplained phenomena in ancient sites",
    language: "Sinhala",
    created_at: "2024-12-12T00:00:00Z"
  }
];

const LatestPosts = () => {
  const allContent = [
    ...mockPosts.map(post => ({
      id: post.id,
      title: post.title,
      category: post.post_type === 'blog' ? 'Blog Post' : 'Video',
      type: post.post_type === 'blog' ? 'Blog' : 'Video',
      excerpt: post.description,
      date: new Date(post.created_at).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }),
      language: 'English',
      icon: post.post_type === 'blog' ? FileText : Play
    })),
    ...mockPodcasts.map(podcast => ({
      id: podcast.id,
      title: podcast.title,
      category: 'Podcast',
      type: 'Podcast',
      excerpt: podcast.description,
      date: new Date(podcast.created_at).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }),
      language: podcast.language,
      icon: Mic
    }))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Episodes & Posts</h2>
          <p className="text-gray-400 text-lg">Fresh paranormal content to keep you on edge</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allContent.map((item) => (
            <article key={item.id} className="bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="aspect-video bg-gray-800 rounded-t-xl flex items-center justify-center border-b border-gray-800">
                <item.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-xs">{item.language}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-gray-300 transition-colors">
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

export default LatestPosts;
