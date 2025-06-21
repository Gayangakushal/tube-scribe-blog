
import FergandoHeader from "@/components/FergandoHeader";
import HeroSection from "@/components/HeroSection";
import FeaturedContent from "@/components/FeaturedContent";
import LatestPosts from "@/components/LatestPosts";
import PopularTopics from "@/components/PopularTopics";
import AboutFergando from "@/components/AboutFergando";
import SubscribeSection from "@/components/SubscribeSection";
import FergandoFooter from "@/components/FergandoFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <FergandoHeader />
      <HeroSection />
      <FeaturedContent />
      <LatestPosts />
      <PopularTopics />
      <AboutFergando />
      <SubscribeSection />
      <FergandoFooter />
    </div>
  );
};

export default Index;
