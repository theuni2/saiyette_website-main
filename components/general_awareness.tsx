"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Optional: npm install lucide-react if not already installed

export default function HomeAwarenessSection() {
  return (
    <section className="py-20 bg-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            General <span className="text-primary">Awareness</span>
          </h2>

          {/* Client Requested Text */}
          <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
            Important information and guidelines to keep in mind. Let's spread awareness together.
          </p>

          {/* CTA Button linking to Cancer Awareness Page */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/awareness"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 text-lg"
            >
              <span>Learn More About Cancer Awareness</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}