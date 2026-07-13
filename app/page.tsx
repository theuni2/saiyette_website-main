import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Intro from "@/components/intro";
import ImpactSection from "@/components/impact-section";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Recognition from "@/components/recognition";
import Podcast from "@/components/podcast";
import AwarenessPosters from "@/components/awareness-posters";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
        <ImpactSection />
        <Recognition/>
        <Gallery />
        <AwarenessPosters />
        <Podcast />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
