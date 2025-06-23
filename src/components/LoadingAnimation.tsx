
const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-gray-800 border-t-white rounded-full animate-spin mb-4"></div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'edo SZ, serif' }}>
          Fergando
        </h1>
        <p className="text-gray-400">Loading paranormal content...</p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
