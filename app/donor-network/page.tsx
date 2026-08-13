"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import AwarenessPosters from "@/components/awareness-posters";
import Podcast from "@/components/podcast";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

const testimonials = [
  {
    name: "Sameeksha Bhatia",
    location: "Dubai, UAE",
    gender: "female",
    image: "/img/girl.png",
    content:
      "Great initiative by Saiyette wishing her the very best as she continues this meaningful journey supporting cancer awareness and care.",
  },
  {
    name: "Eric Chan",
    location: "Dubai, UAE",
    gender: "male",
    image: "/img/man.png",
    content:
      "Saiyette's story and dedication are inspiring. This campaign is a powerful reminder that empathy, awareness, and every action can bring real hope to families affected by cancer.",
  },
  {
    name: "Pankil Gandhi",
    location: "Singapore",
    gender: "male",
    image: "/img/man.png",
    content:
      "Wishing Saiyette the very best — her dedication to supporting cancer awareness and care is truly inspiring, and we're proud to stand behind such a meaningful cause.",
  },
  {
    name: "Ramneek Dhar",
    location: "New Delhi, India",
    gender: "female",
    image: "/img/girl.png",
    content:
      "So proud of Saiyette and her incredible efforts! She is a true star — compassionate, determined, and inspiring. Wishing her the very best always!",
  },
  {
    name: "Shailaja Krishnamurthy",
    location: "Dubai, UAE",
    gender: "female",
    image: "/img/girl.png",
    content:
      "Breast cancer affects so many lives, and Saiyette's initiative touched me deeply. Seeing someone so young lead with empathy, courage, and a genuine desire to make a difference is incredibly moving. I was honoured to support her campaign.",
  },
];

const maleTestimonials = testimonials.filter((t) => t.gender === "male");
const femaleTestimonials = testimonials.filter((t) => t.gender === "female");

const NarratorCard = ({
  testimonialList,
  image,
  delay = 0,
}: {
  testimonialList: typeof testimonials;
  image: string;
  delay?: number;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((i) => (i + 1) % testimonialList.length);
      }, 4000);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [testimonialList.length, delay]);

  const current = testimonialList[index];

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      <div className="relative w-full mb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-7 rounded-[2rem] shadow-lg border border-primary/10 relative"
          >
            <Quote
              size={28}
              className="text-primary/20 mb-3"
              fill="currentColor"
            />
            <p className="text-gray-700 italic leading-relaxed text-base md:text-lg font-medium min-h-[100px]">
              &ldquo;{current.content}&rdquo;
            </p>
            <div className="mt-5 pt-4 border-t border-primary/5 flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-900 text-sm">
                  {current.name}
                </p>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mt-0.5">
                  {current.location}
                </p>
              </div>
              <div className="flex gap-1.5 items-center">
                {testimonialList.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300 bg-primary/20",
                      i === index ? "w-4 bg-primary" : "w-1.5",
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-r border-b border-primary/10 rotate-45" />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-2 flex flex-col items-center"
      >
        <img
          src={image}
          alt="Narrator"
          className="h-[320px] md:h-[380px] w-auto object-contain drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
};

const TestimonialCard = ({
  item,
  index,
}: {
  item: (typeof testimonials)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group"
  >
    {/* Decorative blur */}
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />

    {/* Bubble */}
    <div className="bg-white p-7 rounded-[2rem] border border-primary/5 shadow-sm group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-500 mb-8 relative">
      <Quote size={28} className="text-primary/20 mb-4" fill="currentColor" />
      <p className="text-gray-700 leading-relaxed italic text-base font-medium">
        &ldquo;{item.content}&rdquo;
      </p>
      <div className="absolute -bottom-3 left-10 w-6 h-6 bg-white border-r border-b border-primary/5 rotate-45" />
    </div>

    {/* Profile */}
    <div className="flex items-center gap-4 ml-4">
      <div className="relative w-14 h-14 shrink-0">
        <div className="absolute inset-[-3px] bg-linear-to-tr from-primary/40 to-transparent rounded-[1rem] rotate-6 group-hover:rotate-12 transition-transform duration-500" />
        <div className="relative w-full h-full rounded-[1rem] overflow-hidden border-4 border-white shadow-md bg-secondary/30">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-base leading-tight">
          {item.name}
        </h4>
        <p className="text-primary text-xs font-bold uppercase tracking-widest mt-0.5">
          {item.location}
        </p>
      </div>
    </div>
  </motion.div>
);

const HeroSection = () => (
  <section className="relative min-h-[80vh] flex items-center pt-32 pb-48 overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight"
          >
            Donor <span className="text-primary">Network</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10"
          >
            Your contribution makes real impact — from funding screening camps
            to supporting cancer survivors on their journey to recovery.
            Together, we build a network of hope and resilience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/about"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold transition-all flex items-center gap-2 group shadow-lg shadow-primary/20 hover:scale-101"
            >
              Support Our Mission
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("stories")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer px-8 py-4 bg-white text-foreground border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-colors"
            >
              Impact Stories
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="./new/image.png"
              alt="Donor Network"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" />
        </motion.div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-[calc(100%+1.3px)] h-[80px] fill-white"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".1"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".2"
        ></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
      </svg>
    </div>
  </section>
);

const TestimonialsSection = () => {
  const gridTestimonials = [testimonials[0], testimonials[2], testimonials[3]];

  return (
    <section id="stories" className="py-24 bg-white overflow-hidden relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border-50 border-primary/5" />
        <div className="absolute -bottom-32 -right-32 w-md h-112 rounded-full border-50 border-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-60 border-primary/3" />
      </div>

      <div className="container mx-auto px-4 mb-16 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Impact Stories & <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Voices from our community who have stood by our mission and helped
            us grow.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-end">
          <NarratorCard
            testimonialList={femaleTestimonials}
            image="/img/girl.png"
            delay={0}
          />
          <NarratorCard
            testimonialList={maleTestimonials}
            image="/img/man.png"
            delay={2000}
          />
        </div>

        <div className="mt-24 pt-16 border-t border-primary/5">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-12 text-gray-400 uppercase tracking-[0.2em]"
          >
            More Community Voices
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gridTestimonials.map((item, idx) => (
              <TestimonialCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DonorNetwork = () => {
  return (
    <div className="min-h-screen selection:bg-primary/10 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <TestimonialsSection />
        {/* <AwarenessPosters /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default DonorNetwork;
