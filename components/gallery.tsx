// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence, useAnimation, useMotionValue } from "framer-motion";
// import { X } from "lucide-react";
// import { cn } from "@/lib/utils";

// const items = [
//   {
//     src: "/gallery/6.jpeg",
//     gridClass: "md:col-span-2 md:row-span-2",
//   },
//   {
//     src: "/gallery/2.jpeg",
//     gridClass: "md:col-span-1 md:row-span-1",
//   },
//   {
//     src: "/gallery/3.jpeg",
//     gridClass: "md:col-span-1 md:row-span-2",
//   },
//   {
//     src: "/gallery/4.jpeg",
//     gridClass: "md:col-span-1 md:row-span-1",
//   },
//   {
//     src: "/gallery/5.jpeg",
//     gridClass: "md:col-span-1 md:row-span-2",
//   },
//   {
//     src: "/gallery/1.jpeg",
//     gridClass: "md:col-span-1 md:row-span-1",
//   },
//   {
//     src: "/new/1.jpg",
//     gridClass: "md:col-span-1 md:row-span-2",
//   },
//   {
//     src: "/new/2.jpg",
//     gridClass: "md:col-span-1 md:row-span-2",
//   },
//   {
//     src: "/new/3.jpg",
//     gridClass: "md:col-span-2 md:row-span-2",
//   },
//   {
//     src: "/new/4.jpg",
//     gridClass: "md:col-span-1 md:row-span-1",
//   },
//   {
//     isQuote: true,
//     quote: "Every hand that helps is a ray of hope for someone in the dark.",
//     gridClass: "md:col-span-2 md:row-span-2",
//     bgClass: "bg-primary text-white",
//   },
// ];

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const controls = useAnimation();
//   const x = useMotionValue(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isPaused, setIsPaused] = useState(false);

//   const startAnimation = async () => {
//     await controls.start({
//       x: [x.get(), -1500], // Approximate width, will wrap via repeat
//       transition: {
//         duration: 30 * (1 + x.get() / 1500),
//         ease: "linear",
//       },
//     });
//     // Seamless wrap
//     x.set(0);
//     startAnimation();
//   };

//   useEffect(() => {
//     if (!isPaused) {
//       startAnimation();
//     } else {
//       controls.stop();
//     }
//   }, [isPaused]);

//   return (
//     <section className="py-24">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <div className="text-center mb-16 space-y-4">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-5xl md:text-6xl font-bold tracking-tight"
//           >
//             Our <span className="text-primary">Impact </span> Gallery
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
//           >
//             Moments that reflect hope, strength, and community support in our
//             journey.
//           </motion.p>
//         </div>

//         {/* Desktop Grid */}
//         <div className="hidden md:grid grid-cols-4 gap-4 grid-flow-dense auto-rows-[220px]">
//           {items.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 0.98 }}
//               onClick={() => !item.isQuote && setSelectedImage(item.src!)}
//               className={cn(
//                 "relative overflow-hidden rounded-[2.5rem] group cursor-pointer border border-black/5 flex items-center justify-center p-8 h-full w-full",
//                 item.gridClass,
//                 item.isQuote ? item.bgClass : "bg-white",
//               )}
//             >
//               {item.isQuote ? (
//                 <div className="text-center">
//                   <p className="text-xl md:text-2xl font-bold italic leading-tight">
//                     "{item.quote}"
//                   </p>
//                 </div>
//               ) : (
//                 <img
//                   src={item.src}
//                   alt={`Gallery image ${index + 1}`}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* Mobile Carousel */}
//         <div className="md:hidden overflow-hidden relative">
//           <motion.div 
//             ref={containerRef}
//             className="flex gap-4 pb-8"
//             style={{ x }}
//             animate={controls}
//             drag="x"
//             onDragStart={() => setIsPaused(true)}
//             onDragEnd={() => {
//               // Wrap handling
//               if (x.get() > 0) x.set(x.get() - 1500);
//               if (x.get() < -1500) x.set(x.get() + 1500);
//               setIsPaused(false);
//             }}
//           >
//             {[...items, ...items].map((item, index) => (
//               <motion.div
//                 key={index}
//                 onClick={() => !item.isQuote && setSelectedImage(item.src!)}
//                 className={cn(
//                   "flex-none w-[70%] aspect-4/5 rounded-[2rem] overflow-hidden border border-black/5 flex items-center justify-center p-8 relative",
//                   item.isQuote ? item.bgClass : "bg-white"
//                 )}
//               >
//                 {item.isQuote ? (
//                   <div className="text-center">
//                     <p className="text-xl font-bold italic leading-tight">
//                       "{item.quote}"
//                     </p>
//                   </div>
//                 ) : (
//                   <img
//                     src={item.src}
//                     alt={`Gallery image ${index + 1}`}
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />
//                 )}
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//             className="fixed inset-0 z-100 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="relative max-w-7xl max-h-full"
//             >
//               <img
//                 src={selectedImage}
//                 alt="Enlarged gallery image"
//                 className="rounded-3xl shadow-2xl max-h-[85vh] object-contain"
//               />
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setSelectedImage(null);
//                 }}
//                 className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
//               >
//                 <X size={32} />
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Gallery;


"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useMotionValue } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    src: "/gallery/9.jpeg",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/gallery/2.jpeg",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/gallery/3.jpeg",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/gallery/4.jpeg",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/gallery/7.jpeg",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/gallery/1.jpeg",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/new/1.jpg",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/new/9.png",
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/new/3.jpg",
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/new/4.jpg",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    // Replaced quote with image data
    src: "/gallery/6.jpeg", // Replace with your desired image path
    gridClass: "md:col-span-2 md:row-span-2",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const startAnimation = async () => {
    await controls.start({
      x: [x.get(), -1500], // Approximate width, will wrap via repeat
      transition: {
        duration: 30 * (1 + x.get() / 1500),
        ease: "linear",
      },
    });
    // Seamless wrap
    x.set(0);
    startAnimation();
  };

  useEffect(() => {
    if (!isPaused) {
      startAnimation();
    } else {
      controls.stop();
    }
  }, [isPaused]);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold tracking-tight"
          >
            Our <span className="text-primary">Impact </span> Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Moments that reflect hope, strength, and community support in our
            journey.
          </motion.p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-4 grid-flow-dense auto-rows-[220px]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              // Simpler onClick condition now that all items are images
              onClick={() => setSelectedImage(item.src)}
              className={cn(
                "relative overflow-hidden rounded-[2.5rem] group cursor-pointer border border-black/5 bg-white h-full w-full",
                item.gridClass
              )}
            >
              <img
                src={item.src}
                alt={`Gallery image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-hidden relative">
          <motion.div 
            ref={containerRef}
            className="flex gap-4 pb-8"
            style={{ x }}
            animate={controls}
            drag="x"
            onDragStart={() => setIsPaused(true)}
            onDragEnd={() => {
              // Wrap handling
              if (x.get() > 0) x.set(x.get() - 1500);
              if (x.get() < -1500) x.set(x.get() + 1500);
              setIsPaused(false);
            }}
          >
            {[...items, ...items].map((item, index) => (
              <motion.div
                key={index}
                // Simpler onClick condition
                onClick={() => setSelectedImage(item.src)}
                className={cn(
                  "flex-none w-[70%] aspect-4/5 rounded-[2rem] overflow-hidden border border-black/5 flex items-center justify-center relative bg-white"
                )}
              >
                <img
                  src={item.src}
                  alt={`Gallery image ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-100 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-full"
            >
              <img
                src={selectedImage}
                alt="Enlarged gallery image"
                className="rounded-3xl shadow-2xl max-h-[85vh] object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;