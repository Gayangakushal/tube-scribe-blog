
import { useState } from "react";
import { Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Haunted Temple of Kataragama: Real Investigation",
    excerpt: "Deep dive into one of Sri Lanka's most spiritually charged locations where the paranormal meets the divine.",
    date: "December 20, 2024",
    author: "Fergando",
    category: "Investigation",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    content: "Full article content here..."
  },
  {
    id: 2,
    title: "EVP Evidence: Voices from Beyond",
    excerpt: "Analysis of electronic voice phenomena captured during recent investigations across Sri Lanka.",
    date: "December 18, 2024",
    author: "Fergando",
    category: "Evidence",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
    content: "Full article content here..."
  },
  // Add more posts to reach 20+ for pagination demo
  ...Array.from({ length: 18 }, (_, i) => ({
    id: i + 3,
    title: `Investigation Report ${i + 3}`,
    excerpt: `Detailed investigation of paranormal activities in location ${i + 3}.`,
    date: `December ${20 - i}, 2024`,
    author: "Fergando",
    category: "Investigation",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c787?w=800",
    content: "Full article content here..."
  }))
];

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const postsPerPage = 20; // 4 per row × 5 rows
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const getCurrentPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return blogPosts.slice(startIndex, startIndex + postsPerPage);
  };

  const openPost = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
  };

  if (selectedPost) {
    return (
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 text-white hover:text-gray-300 transition-colors flex items-center space-x-2"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </button>
          
          <article className="max-w-4xl mx-auto">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            <h1 className="text-4xl font-bold text-white mb-4">{selectedPost.title}</h1>
            <div className="flex items-center space-x-4 text-gray-400 mb-8">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{selectedPost.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{selectedPost.author}</span>
              </div>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg">
                {selectedPost.content}
              </p>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Paranormal <span className="text-white">Chronicles</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep investigations, real evidence, and untold stories from the world beyond
          </p>
        </div>

        {/* Blog Posts Grid - 4 per row, 5 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {getCurrentPosts().map((post, index) => (
            <article 
              key={post.id} 
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 group animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => openPost(post)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 text-white hover:text-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded ${
                  currentPage === page 
                    ? 'bg-white text-black' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 text-white hover:text-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
