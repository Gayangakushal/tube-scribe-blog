
const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#0A0F29] to-[#111111] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
          Step Into the <span className="text-[#E31C25]">Unknown</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Real-life paranormal stories & investigations from Fergando
        </p>
        
        <button className="bg-[#E31C25] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#C41E20] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
          Explore Latest Episode
        </button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent"></div>
    </section>
  );
};

export default HeroSection;
