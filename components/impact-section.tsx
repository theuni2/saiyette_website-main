"use client";

import {
  motion,
  useInView,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedCounter = ({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString(),
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [isInView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const ImpactSection = () => {
  const metrics = [
    {
      label: "Women Reached",
      value: 5000,
      description: "Women Reached Through Awareness Drives",
    },
    {
      label: "Screening Tests",
      value: 1800,
      description: "Free Screening Tests Conducted",
    },
    {
      label: "Partners",
      value: 10,
      description: "Corporate & NGO Partners Driving Change",
    },
    {
      label: "Volunteers",
      value: 100,
      description: "Volunteers Contributing To The Cause",
    },
  ];

  return (
    <section className="relative py-24 bg-secondary/30 overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-bold tracking-tight uppercase"
          >
            Our <span className="text-primary">Impact</span> In Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Building a growing community of learners, creators, and innovators —
            together shaping the future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-sm flex flex-col justify-between min-h-[280px] md:min-h-[350px] transition-all hover:shadow-md active:scale-[0.98]"
            >
              <span className="text-md tracking-tight text-black">
                {metric.label}
              </span>

              <div>
                <div className="flex flex-col gap-2 my-8">
                  <div className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground flex items-center">
                    <AnimatedCounter value={metric.value} />
                    <span className="text-primary ml-1">+</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
