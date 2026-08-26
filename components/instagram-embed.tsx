"use client";

import { motion } from "framer-motion";

interface InstagramEmbedProps {
  reelId?: string;
  postId?: string;
  url?: string;
  title?: string;
  className?: string;
}

export default function InstagramEmbed({
  reelId,
  postId,
  url,
  title = "Instagram Video",
  className,
}: InstagramEmbedProps) {
  let embedUrl = "";

  if (url) {
    const match = url.match(/\/(p|reel)\/([A-Za-z0-9_-]+)/);
    if (match && match[2]) {
      embedUrl = `https://www.instagram.com/p/${match[2]}/embed`;
    } else {
      embedUrl = url;
    }
  } else if (postId) {
    embedUrl = `https://www.instagram.com/p/${postId}/embed`;
  } else if (reelId) {
    embedUrl = `https://www.instagram.com/p/${reelId}/embed`;
  } else {
    embedUrl = "https://www.instagram.com/p/Db760TWDHa1/embed";
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative rounded-[2rem] overflow-hidden shadow-xl border border-primary/10 bg-white ${
        className || "aspect-[9/16]"
      }`}
    >
      <iframe
        src={embedUrl}
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
