"use client";

import { motion } from "framer-motion";

interface InstagramEmbedProps {
  reelId: string;
  title?: string;
  className?: string;
}

export default function InstagramEmbed({ reelId, title = "Instagram Reel", className }: InstagramEmbedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative rounded-[2rem] overflow-hidden shadow-lg border border-primary/5 bg-white ${className || "aspect-[9/16]"}`}
    >
      <iframe
        src={`https://www.instagram.com/reel/${reelId}/embed`}
        title={title}
        frameBorder="0"
        scrolling="no"
        allowTransparency={true}
        allow="encrypted-media"
        className="absolute inset-0 w-full h-full"
      ></iframe>
    </motion.div>
  );
}
