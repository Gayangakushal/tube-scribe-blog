
import FergandoHeader from "@/components/FergandoHeader";
import FergandoFooter from "@/components/FergandoFooter";
import { Mail, MessageCircle, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <FergandoHeader />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#0A0F29] to-[#111111]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="text-[#E31C25]">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a paranormal experience to share? Want to collaborate? Get in touch with us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-gray-800 animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#111111] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#E31C25] focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-[#111111] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#E31C25] focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Subject</label>
                    <select className="w-full bg-[#111111] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#E31C25] focus:outline-none transition-colors">
                      <option value="">Select a subject</option>
                      <option value="paranormal-experience">Paranormal Experience</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="investigation-request">Investigation Request</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="media-interview">Media Interview</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Message</label>
                    <textarea 
                      rows={6}
                      className="w-full bg-[#111111] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#E31C25] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your experience or inquiry in detail..."
                    ></textarea>
                  </div>
                  
                  <button className="w-full bg-[#E31C25] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C41E20] transition-colors flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in">
                <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#E31C25]/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-[#E31C25]" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Email</h4>
                        <p className="text-gray-400">contact@fergandoofficial.com</p>
                        <p className="text-gray-500 text-sm">We respond within 24-48 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-[#E31C25]/10 p-3 rounded-lg">
                        <MessageCircle className="h-6 w-6 text-[#E31C25]" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                        <p className="text-gray-400">+94 XX XXX XXXX</p>
                        <p className="text-gray-500 text-sm">For urgent paranormal reports</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-[#E31C25]/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-[#E31C25]" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Location</h4>
                        <p className="text-gray-400">Colombo, Sri Lanka</p>
                        <p className="text-gray-500 text-sm">Available for investigations island-wide</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-gray-800">  
                  <h3 className="text-2xl font-bold text-white mb-4">Investigation Requests</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    If you have a location you'd like us to investigate, please provide as much detail as possible including:
                  </p>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Location and accessibility</li>
                    <li>• History of paranormal activity</li>
                    <li>• Witness testimonies</li>
                    <li>• Permission from property owner</li>
                    <li>• Safety considerations</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-[#E31C25]/10 to-[#0A0F29]/10 rounded-2xl p-8 border border-[#E31C25]/20">
                  <h3 className="text-xl font-bold text-white mb-4">Emergency Paranormal Activity?</h3>
                  <p className="text-gray-300 mb-4">
                    If you're experiencing severe paranormal activity that's affecting your daily life, please reach out immediately.
                  </p>
                  <button className="bg-[#E31C25] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C41E20] transition-colors flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Emergency Contact</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FergandoFooter />
    </div>
  );
};

export default Contact;
