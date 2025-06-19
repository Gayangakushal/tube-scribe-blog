
import { Calendar, Play, Mic, FileText } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Screaming Woman of Galle Fort",
    category: "Ghost Story",
    type: "Podcast",
    excerpt: "A chilling encounter with a restless spirit that has haunted the historic fort for centuries.",
    date: "Dec 18, 2024",
    language: "Sinhala",
    icon: Mic
  },
  {
    id: 2,
    title: "EVP Evidence Collection Techniques",
    category: "Investigation",
    type: "Video",
    excerpt: "Learn professional methods for capturing electronic voice phenomena during paranormal investigations.",
    date: "Dec 15, 2024",
    language: "English",
    icon: Play
  },
  {
    id: 3,
    title: "Behind the Scenes: Temple Investigation",
    category: "Behind the Scenes",
    type: "Blog",
    excerpt: "What really happens during a paranormal investigation at sacred sites across Sri Lanka.",
    date: "Dec 12, 2024",
    language: "English",
    icon: FileText
  },
  {
    id: 4,
    title: "Listeners' Real Ghost Encounters",
    category: "True Stories",
    type: "Podcast",
    excerpt: "Authentic paranormal experiences shared by our community from across the island.",
    date: "Dec 10, 2024",
    language: "Sinhala",
    icon: Mic
  }
];

const LatestPosts = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#111111] to-[#0A0F29]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Episodes & Posts</h2>
          <p className="text-gray-400 text-lg">Fresh paranormal content to keep you on edge</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-xl border border-gray-800 hover:border-[#E31C25]/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="aspect-video bg-gradient-to-br from-[#E31C25]/10 to-[#0A0F29]/30 rounded-t-xl flex items-center justify-center border-b border-gray-800">
                <post.icon className="h-8 w-8 text-[#E31C25] group-hover:scale-110 transition-transform" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#E31C25]/20 text-[#E31C25] px-2 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.language}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#E31C25] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <span className="text-[#E31C25] font-semibold">{post.type}</span>
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
