
import { useState, useEffect } from "react";
import FergandoHeader from "@/components/FergandoHeader";
import HeroSection from "@/components/HeroSection";
import FeaturedContent from "@/components/FeaturedContent";
import LatestContent from "@/components/LatestContent";
import PopularTopics from "@/components/PopularTopics";
import AboutFergando from "@/components/AboutFergando";
import PodcastSection from "@/components/PodcastSection";
import BlogSection from "@/components/BlogSection";
import SubscribeSection from "@/components/SubscribeSection";
import FergandoFooter from "@/components/FergandoFooter";
import LoadingAnimation from "@/components/LoadingAnimation";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <FergandoHeader />
      <section id="home">
        <HeroSection />
      </section>
      <section id="featured">
        <FeaturedContent />
      </section>
      <section id="latest">
        <LatestContent />
      </section>
      <section id="topics">
        <PopularTopics />
      </section>
      <section id="podcast">
        <PodcastSection />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <section id="about">
        <AboutFergando />
      </section>
      <section id="subscribe">
        <SubscribeSection />
      </section>
      <FergandoFooter />
    </div>
  );
};

export default Index;
