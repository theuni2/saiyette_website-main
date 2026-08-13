"use client";

import { motion } from "framer-motion";
import YouTubeEmbed from "./video-embed";
import { Mic2, PlayCircle, Sparkles } from "lucide-react";

const podcasts = [
  {
    id: "fqqv5PZ7GHs",
    title: "Empowering Young Minds: Cancer Awareness",
    description: "Join us for an impactful cancer awareness session organized by IntellyJelly",
  },
  {
    id: "rn49BDNGe4Y",
    title: "Cancer Awareness for Youth ft. Dr. Priyanka Raina",
    description: "This episode is designed to help young audiences understand cancer in a simple, practical, and empowering way.",
  },
  {
    id: "kbLAAGF5zXk",
    title: "Real Talk on Cancer Care | Ft. Dr. Saurabh Jain",
    description: "Dr. Jain shares practical, easy to understand guidance aimed at helping young audiences stay aware of their health.",
  },
  {
    id: "w3xeQOrjMbM",
    title: "Integrative Approach to Cancer Care with Dr. Lima Mathew",
    description: "Integrating modern oncology with classical Ayurveda for holistic cancer care.",
  },
  {
    id: "BoSgc9RINO8",
    title: "A Cancer Biologist’s Journey in CAR-T Cell Therapy",
    description: "Exploring cancer biology and CAR-T cell therapy’s impact on clinical care.",
  },
];

const Podcast = () => {
  return (
    <section className="py-24 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6"
          >
            <Mic2 size={16} />
            <span>The Podcast</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Voices of <span className="text-primary">Hope & Purpose</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Join us as we explore stories of courage, share expert insights, and build a community 
            dedicated to awareness and support.
          </motion.p>
        </div>

        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          {/* First Row: 3 Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcasts.slice(0, 3).map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col h-full bg-white/60 backdrop-blur-md rounded-[2.5rem] p-6 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 duration-500"
              >
                <div className="relative mb-6">
                  <YouTubeEmbed 
                    videoId={podcast.id} 
                    title={podcast.title}
                    className="w-full aspect-video rounded-3xl"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="text-primary w-6 h-6" />
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {podcast.title}
                    </h3>
                    <Sparkles className="text-primary/20 group-hover:text-primary/40 transition-colors" size={20} />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-1">
                    {podcast.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Watch Episode</span>
                    <div className="h-[2px] w-8 bg-primary rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row: 2 Items Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-[66.666%] lg:mx-auto w-full">
            {podcasts.slice(3).map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className="group flex flex-col h-full bg-white/60 backdrop-blur-md rounded-[2.5rem] p-6 border border-primary/10 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 duration-500"
              >
                <div className="relative mb-6">
                  <YouTubeEmbed 
                    videoId={podcast.id} 
                    title={podcast.title}
                    className="w-full aspect-video rounded-3xl"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="text-primary w-6 h-6" />
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {podcast.title}
                    </h3>
                    <Sparkles className="text-primary/20 group-hover:text-primary/40 transition-colors" size={20} />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-1">
                    {podcast.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Watch Episode</span>
                    <div className="h-[2px] w-8 bg-primary rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
