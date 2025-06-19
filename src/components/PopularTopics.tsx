
import { Search, Ghost, Camera, Wrench } from "lucide-react";

const topics = [
  {
    icon: Search,
    title: "Paranormal Investigations",
    description: "Real-time investigations of haunted locations",
    count: "12 Episodes"
  },
  {
    icon: Ghost,
    title: "True Ghost Stories",
    description: "Authentic encounters from across Sri Lanka",
    count: "25 Stories"
  },
  {
    icon: Camera,
    title: "Behind the Scenes",
    description: "What happens when cameras stop rolling",
    count: "8 Posts"
  },
  {
    icon: Wrench,
    title: "Tools & Gear",
    description: "Equipment reviews and investigation tips",
    count: "15 Reviews"
  }
];

const PopularTopics = () => {
  return (
    <section className="py-16 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Explore Topics</h2>
          <p className="text-gray-400 text-lg">Dive deeper into the paranormal world</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gradient-to-b from-[#0A0F29] to-[#1a1a2e] rounded-xl p-6 border border-gray-800 hover:border-[#E31C25]/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="bg-[#E31C25]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E31C25]/20 transition-colors">
                  <topic.icon className="h-8 w-8 text-[#E31C25]" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E31C25] transition-colors">
                  {topic.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {topic.description}
                </p>
                
                <span className="text-[#E31C25] text-sm font-semibold">
                  {topic.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTopics;
