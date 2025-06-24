
const LogoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Our Brand
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            The Fergando logo represents our commitment to exploring the unknown and 
            uncovering the mysteries of the paranormal world.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-2xl p-12 mb-8">
            <img 
              src="/lovable-uploads/0a31f09d-197f-49f7-b17f-618a0bbd02fd.png" 
              alt="Fergando Official Logo" 
              className="w-full max-w-2xl mx-auto h-auto"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Design</h3>
              <p className="text-gray-400">
                Our logo features a distinctive style that captures the essence of mystery and investigation.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Meaning</h3>
              <p className="text-gray-400">
                Each element represents our dedication to authentic paranormal research and storytelling.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Identity</h3>
              <p className="text-gray-400">
                The Fergando brand stands for credible investigation and genuine exploration of the unknown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
