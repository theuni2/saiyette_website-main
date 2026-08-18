"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Ribbon,
  Heart,
  Footprints,
  Sparkles,
} from "lucide-react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { FloatingIcon } from "./ui/floating-icon";

const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto flex max-w-6xl flex-col items-center"
      >
        <div className="relative mb-8 mt-4 overflow-hidden py-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="select-none text-7xl font-bold tracking-tighter sm:text-8xl md:text-[10rem] lg:text-[10rem]"
            style={{
              backgroundImage: 'url("/gallery/6.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: "1.0",
              paddingBottom: "0.1em",
            }}
          >
            We Fight Cancer <br /> Together
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center gap-6 sm:flex-row"
        >
          <Link
            href="/form"
            className="flex items-center gap-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-lg font-medium transition-all hover:scale-101"
          >
            <p>Get Involved</p>
            <ArrowUpRightIcon />
          </Link>
          <Link
            href="/about"
            className="border-foreground/20 hover:bg-primary hover:text-white flex items-center gap-2 rounded-full border px-8 py-4 text-lg font-medium transition-all hover:scale-101"
          >
            Learn More
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className="mt-12 w-full"
        >
          <p className="text-sm tracking-tight text-primary mb-6 opacity-70">
            Our Trusted Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 px-4">
            {[
              { name: "NGO Delhi", src: "/img/ngodelhi.jpeg" },
              { name: "Logo Delhi", src: "/img/logodelhi.png" },
              { name: "Intelly Jelly", src: "/img/intellyjelly.png" },
            ].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative h-20 md:h-30 w-auto grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 cursor-pointer"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-auto object-contain mix-blend-multiply"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
