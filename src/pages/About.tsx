
import FergandoHeader from "@/components/FergandoHeader";
import FergandoFooter from "@/components/FergandoFooter";
import { Youtube, Instagram, Music, Camera, Search, Ghost } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <FergandoHeader />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#0A0F29] to-[#111111]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#E31C25]">Fergando</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exploring the paranormal world through real investigations and authentic storytelling
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 animate-fade-in">
                <h2 className="text-4xl font-bold text-white mb-6">The Story Behind the Channel</h2>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  What started as curiosity about unexplained phenomena has evolved into Sri Lanka's most authentic paranormal investigation channel. With years of experience exploring haunted locations, collecting real stories, and documenting evidence, Fergando brings you face-to-face with the mysteries that exist beyond our understanding.
                </p>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  From ancient temples with centuries-old spirits to colonial mansions that echo with the past, every investigation is conducted with respect for both the living and the departe d. The focus is always on authentic experiences, real evidence, and honest storytelling.
                </p>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  Broadcasting in both Sinhala and English, the channel serves as a bridge between traditional Sri Lankan folklore and modern paranormal investigation techniques, bringing these untold stories to a global audience.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#E31C25] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C41E20] transition-colors flex items-center justify-center space-x-2">
                    <Youtube className="h-5 w-5" />
                    <span>Visit YouTube Channel</span>
                  </button>
                  <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-[#E31C25] hover:text-[#E31C25] transition-colors flex items-center justify-center space-x-2">
                    <Music className="h-5 w-5" />
                    <span>Listen on Spotify</span>
                  </button>
                </div>
              </div>
              
              <div className="order-1 md:order-2 animate-fade-in">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-[#E31C25]/20 to-[#0A0F29]/20 rounded-2xl border border-gray-700 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/lovable-uploads/233b61f8-7947-45c4-9b78-d23b0362de6a.png" 
                      alt="Fergando Logo"
                      className="w-3/4 h-3/4 object-contain opacity-80"
                    />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#E31C25]/10 to-transparent rounded-2xl blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gradient-to-b from-[#111111] to-[#0A0F29]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
              <p className="text-gray-400 text-lg">Authentic paranormal investigation and storytelling</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-xl p-8 border border-gray-800 hover:border-[#E31C25]/50 transition-all duration-500 hover:transform hover:scale-105 text-center animate-fade-in">
                <div className="bg-[#E31C25]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-[#E31C25]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Real Investigations</h3>
                <p className="text-gray-400 leading-relaxed">
                  On-site investigations of genuinely haunted locations using professional equipment and methodical approaches to document paranormal activity.
                </p>
              </div>

              <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-xl p-8 border border-gray-800 hover:border-[#E31C25]/50 transition-all duration-500 hover:transform hover:scale-105 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-[#E31C25]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Ghost className="h-8 w-8 text-[#E31C25]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Authentic Stories</h3>
                <p className="text-gray-400 leading-relaxed">
                  Collecting and sharing real paranormal experiences from witnesses, ensuring every story is verified and presented with respect.
                </p>
              </div>

              <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-xl p-8 border border-gray-800 hover:border-[#E31C25]/50 transition-all duration-500 hover:transform hover:scale-105 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-[#E31C25]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="h-8 w-8 text-[#E31C25]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Evidence Documentation</h3>
                <p className="text-gray-400 leading-relaxed">
                  Capturing and analyzing paranormal evidence including EVP recordings, thermal readings, and electromagnetic anomalies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-4xl font-bold text-[#E31C25] mb-2">150+</div>
                <div className="text-gray-400">Investigations</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-bold text-[#E31C25] mb-2">50K+</div>
                <div className="text-gray-400">Subscribers</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-[#E31C25] mb-2">2M+</div>
                <div className="text-gray-400">Views</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold text-[#E31C25] mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 bg-gradient-to-b from-[#111111] to-[#0A0F29]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Connect With Us</h2>
            <p className="text-gray-400 text-lg mb-12">
              Join the community and stay updated on the latest investigations
            </p>

            <div className="flex justify-center space-x-8 mb-12">
              <a href="#" className="bg-[#0A0F29] p-6 rounded-full border border-gray-800 hover:border-[#E31C25] hover:bg-[#E31C25]/10 transition-all duration-300 group">
                <Youtube className="h-8 w-8 text-gray-400 group-hover:text-[#E31C25]" />
              </a>
              <a href="#" className="bg-[#0A0F29] p-6 rounded-full border border-gray-800 hover:border-[#E31C25] hover:bg-[#E31C25]/10 transition-all duration-300 group">
                <Music className="h-8 w-8 text-gray-400 group-hover:text-[#E31C25]" />
              </a>
              <a href="#" className="bg-[#0A0F29] p-6 rounded-full border border-gray-800 hover:border-[#E31C25] hover:bg-[#E31C25]/10 transition-all duration-300 group">
                <Instagram className="h-8 w-8 text-gray-400 group-hover:text-[#E31C25]" />
              </a>
            </div>

            <div className="bg-gradient-to-r from-[#0A0F29] to-[#1a1a2e] rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Have a Paranormal Experience?</h3>
              <p className="text-gray-400 mb-6">
                Share your story with us. We investigate credible reports and treat every submission with confidentiality and respect.
              </p>
              <button className="bg-[#E31C25] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C41E20] transition-colors">
                Submit Your Story
              </button>
            </div>
          </div>
        </div>
      </section>

      <FergandoFooter />
    </div>
  );
};

export default About;
