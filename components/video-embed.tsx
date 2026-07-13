"use client";

import { motion } from "framer-motion";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export default function YouTubeEmbed({ videoId, title, className }: YouTubeEmbedProps) {
  const isLocalVideo = videoId.endsWith(".mp4") || videoId.startsWith("/") || videoId.includes(".mp4");

  const getEmbedUrl = (videoSrc: string) => {
    if (videoSrc.includes("drive.google.com")) {
      const match = videoSrc.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }
    if (videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be")) {
      const match = videoSrc.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([a-zA-Z0-9_-]{11})/);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }
    }
    if (/^[a-zA-Z0-9_-]{11}$/.test(videoSrc)) {
      return `https://www.youtube.com/embed/${videoSrc}`;
    }
    if (videoSrc.length > 15) {
      return `https://drive.google.com/file/d/${videoSrc}/preview`;
    }
    return videoSrc;
  };

  const embedUrl = getEmbedUrl(videoId);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative rounded-[2rem] overflow-hidden shadow-lg border border-primary/5 ${className || "aspect-video"}`}
    >
      {isLocalVideo ? (
        <video
          src={videoId}
          title={title}
          controls
          playsInline
          className="absolute inset-0 w-full h-full object-cover bg-black"
        />
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      )}
    </motion.div>
  );
}
