
const AboutFergando = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0A0F29] to-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Fergando</h2>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Host, researcher and story-collector exploring the unexplained in Sri Lanka and beyond. 
                With years of experience in paranormal investigations, Fergando brings authentic encounters 
                and evidence-based research to uncover the mysteries that surround us.
              </p>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                From ancient temples to colonial mansions, join the journey through the most haunted 
                locations across the island, where every story is real and every investigation reveals 
                something unexpected.
              </p>
              
              <button className="bg-transparent border-2 border-[#E31C25] text-[#E31C25] px-8 py-3 rounded-lg font-semibold hover:bg-[#E31C25] hover:text-white transition-all duration-300">
                Read Full Bio
              </button>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#E31C25]/20 to-[#0A0F29]/20 rounded-2xl border border-gray-700 flex items-center justify-center">
                  <div className="text-6xl">👻</div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#E31C25]/10 to-transparent rounded-2xl blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFergando;
