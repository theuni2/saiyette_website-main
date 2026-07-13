"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  SpeakerHighIcon,
  SpeakerSlashIcon,
  PlayIcon,
  PauseIcon,
} from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const Intro = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isInView]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="relative overflow-hidden rounded-[2.5rem] shadow-2xl group/video cursor-pointer"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/img/intro_video.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full aspect-square object-cover"
              />

              {/* Premium Controls Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  initial={false}
                  animate={{ scale: isPlaying ? 0.8 : 1 }}
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white"
                >
                  {isPlaying ? (
                    <PauseIcon weight="fill" className="w-10 h-10" />
                  ) : (
                    <PlayIcon weight="fill" className="w-10 h-10 ml-1" />
                  )}
                </motion.div>
              </div>

              <button
                onClick={toggleMute}
                className="absolute bottom-6 right-6 p-3 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/20 transition-all hover:bg-black/60 hover:scale-110 active:scale-95 z-10"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <SpeakerSlashIcon weight="bold" className="w-6 h-6" />
                ) : (
                  <SpeakerHighIcon weight="bold" className="w-6 h-6" />
                )}
              </button>

              <div className="absolute inset-0 bg-black/10 pointer-events-none transition-opacity group-hover/video:opacity-0" />
            </div>

            <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              staggerChildren: 0.2,
            }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-foreground"
              >
                Together, We Fight Cancer{" "}
                <span className="text-primary">One Step at a Time.</span>
                <br />
                <span className="text-3xl md:text-4xl font-normal text-muted-foreground mt-4 block leading-tight">
                  Empowering women through awareness, support, and early
                  detection.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-xl"
              >
                Our mission is to raise awareness about breast cancer, promote
                early screening, and support patients and survivors through
                education, empathy, and action.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-4 text-lg font-medium transition-all hover:scale-[1.02] hover:bg-primary hover:text-white hover:border-primary group"
              >
                Learn More
                <ArrowUpRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
