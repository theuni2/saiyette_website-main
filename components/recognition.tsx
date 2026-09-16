// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";
// import YouTubeEmbed from "./video-embed";
// import InstagramEmbed from "./instagram-embed";

// export default function Recognition() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <section className="py-24 bg-secondary/5 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
//           >
//             Saiyette’s{" "}
//             <span className="text-primary">Impact & Recognition</span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
//           >
//             Celebrating young voices that spark awareness and courage.
//             Saiyette’s powerful article and dedicated advocacy have been
//             featured in IntellyJelly Magazine.
//           </motion.p>
//         </div>

//         <div className="space-y-12">
//           {/* UK Section */}
//           {/* <section>
//             <div className="flex items-center gap-4 mb-4">
//               <span className="text-xs font-bold uppercase tracking-widest text-primary/50">
//                 United Kingdom
//               </span>
//               <div className="h-px flex-1 bg-primary/10" />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="cursor-zoom-in"
//                 onClick={() => setSelectedImage("/new/5.jpeg")}
//               >
//                 <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white">
//                   <img
//                     src="/new/5.jpeg"
//                     alt="COBIS Certificate"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="cursor-zoom-in"
//                 onClick={() => setSelectedImage("/new/6.png")}
//               >
//                 <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white">
//                   <img
//                     src="/new/6.png"
//                     alt="COBIS Recognition"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </section> */}

// {/* UK Section */}
// <section>
//   <div className="flex items-center gap-4 mb-4">
//     <span className="text-xs font-bold uppercase tracking-widest text-primary/50">
//       United Kingdom
//     </span>
//     <div className="h-px flex-1 bg-primary/10" />
//   </div>
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="cursor-zoom-in"
//       onClick={() => setSelectedImage("/new/5.jpeg")}
//     >
//       <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white">
//         <img
//           src="/new/5.jpeg"
//           alt="COBIS Certificate"
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//         />
//       </div>
//     </motion.div>
    
//     {/* FIXED: 6.png container updated with bg-slate-50/bg-white and p-4, image switched to object-contain */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.1 }}
//       className="cursor-zoom-in"
//       onClick={() => setSelectedImage("/new/6.png")}
//     >
//       <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white bg-slate-50 p-4 flex items-center justify-center">
//         <img
//           src="/new/6.png"
//           alt="COBIS Recognition"
//           className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
//         />
//       </div>
//     </motion.div>
//   </div>
// </section>

//           {/* UAE Section */}
//           <section>
//             <div className="flex items-center gap-4 mb-4">
//               <span className="text-xs font-bold uppercase tracking-widest text-primary/50">
//                 UAE
//               </span>
//               <div className="h-px flex-1 bg-primary/10" />
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.98 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 className="lg:col-span-3 cursor-zoom-in"
//                 onClick={() => setSelectedImage("/new/8.jpeg")}
//               >
//                 <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white">
//                   <img
//                     src="/new/8.jpeg"
//                     alt="YallaGive Certificate"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.98 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="lg:col-span-6 cursor-zoom-in"
//                 onClick={() => setSelectedImage("/new/7.jpeg")}
//               >
//                 <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white">
//                   <img
//                     src="/new/7.jpeg"
//                     alt="Hair Donation Certificate"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="lg:col-span-3"
//               >
//                 <div className="rounded-[2rem] overflow-hidden shadow-sm border-4 border-white h-[450px] relative bg-white">
//                   <InstagramEmbed
//                     reelId="DRCgCIKDv35"
//                     title="UAE Recognition Reel"
//                     className="w-full h-full"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </section>



//           {/* India Section */}
//           <section>
//             <div className="flex items-center gap-4 mb-4">
//               <span className="text-xs font-bold uppercase tracking-widest text-primary/50">
//                 India
//               </span>
//               <div className="h-px flex-1 bg-primary/10" />
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="lg:col-span-3 cursor-zoom-in"
//                 onClick={() => setSelectedImage("/img/jelly/pdf.png")}
//               >
//                 <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-sm group bg-white p-6 border-4 border-white flex items-center justify-center">
//                   <img
//                     src="/img/jelly/pdf.png"
//                     alt="IntellyJelly Publication"
//                     className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="lg:col-span-6"
//               >
//                 <div className="rounded-[2rem] overflow-hidden shadow-sm border-4 border-white h-[450px] relative">
//                   <YouTubeEmbed
//                     videoId="zyzQGUZ6u3w"
//                     title="IntellyJelly Video Certificate"
//                     className="w-full h-full"
//                   />
//                 </div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="lg:col-span-3 cursor-zoom-in"
//                 onClick={() => setSelectedImage("/new/5.jpg")}
//               >
//                 <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white">
//                   <img
//                     src="/new/5.jpg"
//                     alt="India Impact"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* Global Impact Summary */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="bg-primary/5 p-8 md:p-12 rounded-[2.5rem] border border-primary/10 relative overflow-hidden group text-center">
//               <div className="relative z-10 max-w-3xl mx-auto">
//                 <h4 className="text-xl font-bold mb-4 text-primary">
//                   Global Voice, Local Impact
//                 </h4>
//                 <p className="text-muted-foreground leading-relaxed italic">
//                   "Empowering women through awareness and early detection across
//                   the UK, UAE, and India. Together, we are making a difference
//                   across borders."
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//             className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="relative max-w-7xl max-h-full"
//             >
//               <img
//                 src={selectedImage}
//                 alt="Enlarged recognition image"
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
// }


// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";
// import YouTubeEmbed from "./video-embed";
// import InstagramEmbed from "./instagram-embed";

// export default function Recognition() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <section className="py-24 bg-secondary/5 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
//           >
//             Saiyette’s{" "}
//             <span className="text-primary">Impact & Recognition</span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
//           >
//             Celebrating young voices that spark awareness and courage.
//             Saiyette’s powerful article and dedicated advocacy have been
//             featured in IntellyJelly Magazine.
//           </motion.p>
//         </div>

//         <div className="space-y-16">
//           {/* UK Section */}
//           <section>
//             <div className="flex items-center gap-4 mb-4">
//               <span className="text-xs font-bold uppercase tracking-widest text-primary/50">
//                 United Kingdom
//               </span>
//               <div className="h-px flex-1 bg-primary/10" />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="cursor-zoom-in"
//                 onClick={() => setSelectedImage("/new/5.jpeg")}
//               >
//                 <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white">
//                   <img
//                     src="/new/5.jpeg"
//                     alt="COBIS Certificate"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </motion.div>
              
//               {/* FIXED: 6.png container updated with bg-slate-50/bg-white and p-4, image switched to object-contain */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="cursor-zoom-in"
//                 onClick={() => setSelectedImage("/new/6.png")}
//               >
//                 <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white bg-slate-50 p-4 flex items-center justify-center">
//                   <img
//                     src="/new/6.png"
//                     alt="COBIS Recognition"
//                     className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* UAE Section */}
//           <section>
//             <div className="flex items-center gap-4 mb-6">
//               <span className="text-xs font-bold uppercase tracking-widest text-primary/50">
//                 UAE
//               </span>
//               <div className="h-px flex-1 bg-primary/10" />
//             </div>
            
//             <div className="space-y-6">
//               {/* Row 1: Three A4 portrait style images */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   className="cursor-zoom-in"
//                   onClick={() => setSelectedImage("/new/8.jpeg")}
//                 >
//                   <div className="relative aspect-[1/1.414] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white bg-white">
//                     <img
//                       src="/new/8.jpeg"
//                       alt="YallaGive Certificate"
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.1 }}
//                   className="cursor-zoom-in"
//                   onClick={() => setSelectedImage("/new/7.jpeg")}
//                 >
//                   <div className="relative aspect-[1/1.414] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white bg-white">
//                   <InstagramEmbed
//                       reelId="DRCgCIKDv35"
//                       title="UAE Recognition Reel"
//                       className="w-full h-full"
//                     />
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2 }}
//                   className="cursor-zoom-in"
//                   onClick={() => setSelectedImage("/new/yallagive.png")} 
//                 >
//                   <div className="relative aspect-[1/1.414] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white bg-white flex items-center justify-center">
//                     <img
//                       src="/new/yallagive.png"
//                       alt="UAE Achievement Portrait"
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Row 2: Two wide landscape elements */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Landscape Element 1: Instagram Embed Container adjusted to a clean presentation aspect */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <div className="rounded-[2rem] overflow-hidden shadow-sm border-4 border-white aspect-[16/10] md:aspect-[16/9] relative bg-white">
//                          <img
//                       src="/new/yallagive_website.png"
//                       alt="UAE Community Gathering Landscape"
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                   </div>
//                 </motion.div>

//                 {/* Landscape Element 2: Optional image slot initialized with standard widescreen aspect */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.4 }}
//                   className="cursor-zoom-in"
//                   onClick={() => setSelectedImage("/new/7.jpeg")} 
//                 >
//                   <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white bg-white">
//                     <img
//                       src="/new/7.jpeg"
//                       alt="UAE Community Gathering Landscape"
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </section>

//           {/* India Section */}
//           <section>
//             <div className="flex items-center gap-4 mb-4">
//               <span className="text-xs font-bold uppercase tracking-widest text-primary/50">
//                 India
//               </span>
//               <div className="h-px flex-1 bg-primary/10" />
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="lg:col-span-3 cursor-zoom-in"
//                 onClick={() => setSelectedImage("/img/jelly/pdf.png")}
//               >
//                 <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-sm group bg-white p-6 border-4 border-white flex items-center justify-center">
//                   <img
//                     src="/img/jelly/pdf.png"
//                     alt="IntellyJelly Publication"
//                     className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="lg:col-span-6"
//               >
//                 <div className="rounded-[2rem] overflow-hidden shadow-sm border-4 border-white h-[450px] relative">
//                   <YouTubeEmbed
//                     videoId="zyzQGUZ6u3w"
//                     title="IntellyJelly Video Certificate"
//                     className="w-full h-full"
//                   />
//                 </div>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="lg:col-span-3 cursor-zoom-in"
//                 onClick={() => setSelectedImage("/new/5.jpg")}
//               >
//                 <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white">
//                   <img
//                     src="/new/5.jpg"
//                     alt="India Impact"
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </section>

//           {/* Global Impact Summary */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="bg-primary/5 p-8 md:p-12 rounded-[2.5rem] border border-primary/10 relative overflow-hidden group text-center">
//               <div className="relative z-10 max-w-3xl mx-auto">
//                 <h4 className="text-xl font-bold mb-4 text-primary">
//                   Global Voice, Local Impact
//                 </h4>
//                 <p className="text-muted-foreground leading-relaxed italic">
//                   "Empowering women through awareness and early detection across
//                   the UK, UAE, and India. Together, we are making a difference
//                   across borders."
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//             className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="relative max-w-7xl max-h-full"
//             >
//               <img
//                 src={selectedImage}
//                 alt="Enlarged recognition image"
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
// }


"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Newspaper, Radio, Globe, BookOpen } from "lucide-react";
import YouTubeEmbed from "./video-embed";
import InstagramEmbed from "./instagram-embed";

export default function Recognition() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
           <span className="text-primary">Impact & Media Recognition</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Featured in leading international news outlets including Times of India, Gulf News, Khaleej Times, Nature & Science, and Saudi Press for youth innovation in breast cancer awareness.
          </motion.p>
        </div>

        {/* Global Press & Media Highlights */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-primary/70 flex items-center gap-2">
              <Globe size={16} />
              INTERNATIONAL MEDIA & PRESS COVERAGE
            </span>
            <div className="h-px flex-1 bg-primary/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Times of India Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 border border-primary/10 shadow-md flex flex-col justify-between hover:border-primary/30 transition-all hover:shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-red-100 text-red-700 font-bold text-xs uppercase tracking-wider">
                    Times of India
                  </span>
                  <Newspaper className="text-red-500" size={20} />
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  At 10, she lost her grandmother to cancer. At 17, Dubai teen Saiyette Aima built an AI platform and took cancer awareness to India
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Featured in Times of India spotlighting Saiyette Aima&apos;s journey, AI platform innovation, and global health advocacy.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href="https://timesofindia.indiatimes.com/world/middle-east/at-10-she-lost-her-grandmother-to-cancer-at-17-dubai-teen-saiyette-aima-built-an-ai-platform-and-took-cancer-awareness-to-india/articleshow/133914170.cms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-sm"
                >
                  <span>Read Full Article on TOI</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href="https://timesofindia.indiatimes.com/top-news-now/top-news-audio-briefing-08-sep-2026-3-pm/amp_videoshow/133918517.cms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gray-50 text-gray-700 hover:text-primary text-xs font-semibold transition-all border border-gray-200"
                >
                  <Radio size={14} />
                  <span>Listen to TOI Audio Briefing</span>
                </a>
              </div>
            </motion.div>

            {/* Nature et Science Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 border border-primary/10 shadow-md flex flex-col justify-between hover:border-primary/30 transition-all hover:shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                    Nature & Science
                  </span>
                  <BookOpen className="text-emerald-500" size={20} />
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  International Health Feature: Dubai Teen Saiyette Aima
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Nature et Science coverage on how Saiyette Aima leverages technology to break social taboos and make breast health accessible.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href="https://www.natureetscience.com/health/general/at-10-she-lost-her-grandmother-to-breast-cancer-at-17-dubai-teen-saiyette-aima-built-an-ai-platform-and-took-cancer-awareness-to-india/ar-AA2bPdwf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-sm"
                >
                  <span>Read Nature & Science Story</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>

            {/* Khaleej Times Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-6 border border-primary/10 shadow-md flex flex-col justify-between hover:border-primary/30 transition-all hover:shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-wider">
                    Khaleej Times
                  </span>
                  <Globe className="text-amber-600" size={20} />
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  Dubai Teen Turns Personal Loss Into Movement: Hair Donation, Early Detection & AI Cancer Platform
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Featured in Khaleej Times detailing Saiyette Aima&apos;s story of losing her grandmother, leading hair donation drives, and launching the AI Care Check platform.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href="https://www.khaleejtimes.com/lifestyle/dubai-teen-grandmother-cancer-hair-donation-early-detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-sm"
                >
                  <span>Read Khaleej Times Article</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="space-y-16">

          {/* UAE Section */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary/50">
                UAE
              </span>
              <div className="h-px flex-1 bg-primary/10" />
            </div>

            {/* Gulf News Press Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 bg-gradient-to-br from-primary/10 via-white to-pink-50 rounded-[2.5rem] p-6 md:p-10 border border-primary/20 shadow-lg relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Text info */}
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
                    <Newspaper size={14} />
                    <span>GULF NEWS / FRIDAY MAGAZINE FEATURE</span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                    Purpose in Pink: 17-Year-Old Builds AI Platform to Support Breast Cancer Patients
                  </h3>

                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Featured in Gulf News Friday Magazine as leading young changemakers in the UAE making an impact beyond classrooms.
                  </p>

                  <div className="pt-2">
                    <a
                      href="https://gulfnews.com/friday/purpose-in-pink-17-year-old-builds-ai-platform-to-support-breast-cancer-patients-1.500654196"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all hover:scale-102"
                    >
                      <span>Read Full Article on Gulf News</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Images */}
                <div className="grid grid-cols-2 gap-4 shrink-0 w-full lg:w-auto">
                  <div
                    className="cursor-zoom-in group relative rounded-2xl overflow-hidden border-2 border-white shadow-md aspect-[3/4] w-36 sm:w-48 bg-white"
                    onClick={() => setSelectedImage("/new/gulfnews-cover.jpg")}
                  >
                    <img
                      src="/new/gulfnews-cover.jpg"
                      alt="Gulf News Friday Magazine Cover"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold p-2 text-center">
                      Click to View Cover
                    </div>
                  </div>

                  <div
                    className="cursor-zoom-in group relative rounded-2xl overflow-hidden border-2 border-white shadow-md aspect-[3/4] w-36 sm:w-48 bg-white"
                    onClick={() => setSelectedImage("/new/gulfnews-article.jpg")}
                  >
                    <img
                      src="/new/gulfnews-article.jpg"
                      alt="Gulf News Friday Magazine Article Page"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold p-2 text-center">
                      Click to View Article
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-6">
              {/* Row 1: Three A4 portrait style images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="cursor-zoom-in"
                  onClick={() => setSelectedImage("/new/8.jpeg")}
                >
                  <div className="relative aspect-[1/1.414] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white bg-white">
                    <img
                      src="/new/8.jpeg"
                      alt="YallaGive Certificate"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="cursor-zoom-in"
                  onClick={() => setSelectedImage("/new/7.jpeg")}
                >
                  <div className="relative aspect-[1/1.414] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white bg-white">
                    <InstagramEmbed
                      reelId="DRCgCIKDv35"
                      title="UAE Recognition Reel"
                      className="w-full h-full"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="cursor-zoom-in"
                  onClick={() => setSelectedImage("/new/yallagive.png")} 
                >
                  <div className="relative aspect-[1/1.414] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white bg-white flex items-center justify-center">
                    <img
                      src="/new/yallagive.png"
                      alt="UAE Achievement Portrait"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Row 2: Two wide landscape elements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="rounded-[2rem] overflow-hidden shadow-sm border-4 border-white aspect-[16/10] md:aspect-[16/9] relative bg-white">
                    <img
                      src="/new/yallagive_website.png"
                      alt="UAE Community Gathering Landscape"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>

                {/* FIXED: Swapped object-cover to object-contain, added bg-slate-50 and standard padding to keep the full layout intact while displaying the entire certificate boundaries cleanly. */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="cursor-zoom-in"
                  onClick={() => setSelectedImage("/new/7.jpeg")} 
                >
                  <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white bg-slate-50 p-6 flex items-center justify-center">
                    <img
                      src="/new/7.jpeg"
                      alt="UAE Certificate Details"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* India Section */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary/50">
                India
              </span>
              <div className="h-px flex-1 bg-primary/10" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3 cursor-zoom-in"
                onClick={() => setSelectedImage("/img/jelly/pdf.png")}
              >
                <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-sm group bg-white p-6 border-4 border-white flex items-center justify-center">
                  <img
                    src="/img/jelly/pdf.png"
                    alt="IntellyJelly Publication"
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-6"
              >
                <div className="rounded-[2rem] overflow-hidden shadow-sm border-4 border-white h-[450px] relative">
                  <YouTubeEmbed
                    videoId="zyzQGUZ6u3w"
                    title="IntellyJelly Video Certificate"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-3 cursor-zoom-in"
                onClick={() => setSelectedImage("/new/5.jpg")}
              >
                <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white">
                  <img
                    src="/new/5.jpg"
                    alt="India Impact"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </section>

 {/* UK Section */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary/50">
                United Kingdom
              </span>
              <div className="h-px flex-1 bg-primary/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="cursor-zoom-in"
                onClick={() => setSelectedImage("/new/5.jpeg")}
              >
                <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white">
                  <img
                    src="/new/5.jpeg"
                    alt="COBIS Certificate"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="cursor-zoom-in"
                onClick={() => setSelectedImage("/new/6.png")}
              >
                <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-sm group border-4 border-white bg-slate-50 p-4 flex items-center justify-center">
                  <img
                    src="/new/6.png"
                    alt="COBIS Recognition"
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </section>



          {/* Global Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary/5 p-8 md:p-12 rounded-[2.5rem] border border-primary/10 relative overflow-hidden group text-center">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h4 className="text-xl font-bold mb-4 text-primary">
                  Global Voice, Local Impact
                </h4>
                <p className="text-muted-foreground leading-relaxed italic">
                  "Empowering women through awareness and early detection. Together, we are making a difference
                  across borders."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-full"
            >
              <img
                src={selectedImage}
                alt="Enlarged recognition image"
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
}