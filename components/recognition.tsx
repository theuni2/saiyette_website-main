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
import { X } from "lucide-react";
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
           <span className="text-primary">Impact & Recognition</span>
          </motion.h2>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Celebrating young voices that spark awareness and courage.
            Saiyette’s powerful article and dedicated advocacy have been
            featured in IntellyJelly Magazine.
          </motion.p> */}
        </div>

        <div className="space-y-16">

          {/* UAE Section */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary/50">
                UAE
              </span>
              <div className="h-px flex-1 bg-primary/10" />
            </div>
            
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