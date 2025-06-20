
import FergandoHeader from "@/components/FergandoHeader";
import FergandoFooter from "@/components/FergandoFooter";
import { Calendar, User, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Haunted Temple of Kataragama: Real Investigation",
    excerpt: "Deep dive into one of Sri Lanka's most spiritually charged locations where the paranormal meets the divine.",
    date: "December 20, 2024",
    author: "Fergando",
    category: "Investigation",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    featured: true
  },
  {
    id: 2,
    title: "EVP Evidence: Voices from Beyond",
    excerpt: "Analysis of electronic voice phenomena captured during recent investigations across Sri Lanka.",
    date: "December 18, 2024",
    author: "Fergando",
    category: "Evidence",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800"
  },
  {
    id: 3,
    title: "Ghost Stories from Colonial Era",
    excerpt: "Real encounters from British colonial buildings that still house restless spirits.",
    date: "December 15, 2024",
    author: "Fergando",
    category: "History",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c787?w=800"
  },
  {
    id: 4,
    title: "Equipment Review: EMF Detectors",
    excerpt: "Professional review of the latest paranormal investigation equipment for ghost hunting.",
    date: "December 12, 2024",
    author: "Fergando",
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800"
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <FergandoHeader />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#0A0F29] to-[#111111]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Paranormal <span className="text-[#E31C25]">Chronicles</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep investigations, real evidence, and untold stories from the world beyond
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-[#111111]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-[#0A0F29] to-[#1a1a2e] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#E31C25]/50 transition-all duration-500 group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-[#E31C25] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        FEATURED
                      </span>
                      <span className="text-[#E31C25] text-sm">{featuredPost.category}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-[#E31C25] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                      </div>
                      <button className="text-[#E31C25] hover:text-white transition-colors font-semibold">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-to-b from-[#111111] to-[#0A0F29]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Latest <span className="text-[#E31C25]">Investigations</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-xl overflow-hidden border border-gray-800 hover:border-[#E31C25]/50 transition-all duration-500 hover:transform hover:scale-105 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-[#E31C25]/20 text-[#E31C25] px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <Tag className="h-3 w-3" />
                        <span>{post.category}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#E31C25] transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FergandoFooter />
    </div>
  );
};

export default Blog;
