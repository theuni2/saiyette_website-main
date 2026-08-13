// "use client";

// import { motion } from "framer-motion";

// export default function AwarenessPosters() {
//   return (
//     <section className="py-20 bg-secondary/5 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
//             General <span className="text-primary">Awareness</span>
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Important information and guidelines to keep in mind. Let's spread awareness together.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group bg-white"
//           >
//             <img 
//               src="/posters/1.png" 
//               alt="Awareness Poster 1" 
//               className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700" 
//             />
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group bg-white"
//           >
//             <img 
//               src="/posters/3.png" 
//               alt="Awareness Poster 2" 
//               className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700" 
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";

// export default function AwarenessPosters() {
//   return (
//     <section className="py-20 bg-secondary/5 overflow-hidden">
// <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
//             General <span className="text-primary">Awareness</span>
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Important information and guidelines to keep in mind. Let's spread awareness together.
//           </p>
//         </motion.div>

//   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//   {/* Poster 1 */}
//   <motion.div
//     initial={{ opacity: 0, x: -20 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay: 0.1 }}
//     className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group bg-white h-[450px] md:h-[500px] relative flex items-center justify-center"
//   >
//     <img 
//       src="/posters/1.png" 
//       alt="Awareness Poster 1" 
//       className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
//     />
//   </motion.div>

//   {/* Poster 2 */}
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay: 0.2 }}
//     className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group bg-white h-[450px] md:h-[500px] relative flex items-center justify-center"
//   >
//     <img 
//       src="/posters/2.png" // Make sure to use your correct image path here
//       alt="Awareness Poster 2" 
//       className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
//     />
//   </motion.div>

//   {/* Poster 3 */}
//   {/* <motion.div
//     initial={{ opacity: 0, x: 20 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay: 0.3 }}
//     className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group bg-white h-[450px] md:h-[500px] relative flex items-center justify-center"
//   >
//     <img 
//       src="/posters/3.png" 
//       alt="Awareness Poster 3" 
//       className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
//     />
//   </motion.div> */}
// </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";

// export default function AwarenessPosters() {
//   return (
//     <section className="py-20 bg-secondary/5 overflow-hidden">
//       <div className="container mx-auto px-4">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
//             General <span className="text-primary">Awareness</span>
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Important information and guidelines to keep in mind. Let's spread awareness together.
//           </p>
//         </motion.div>

//         {/* Poster Grid - 2 Column Centered Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {/* Poster 1 */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group bg-white h-[450px] md:h-[500px] relative flex items-center justify-center"
//           >
//             <img 
//               src="/posters/1.png" 
//               alt="Self Breast Examination Awareness Poster" 
//               className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
//             />
//           </motion.div>

//           {/* Poster 2 */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group bg-white h-[450px] md:h-[500px] relative flex items-center justify-center"
//           >
//             <img 
//               src="/posters/2.png" 
//               alt="Breast Cancer Causes and Detection Poster" 
//               className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function AwarenessPosters() {
  const posters = [
    {
      src: "/posters/1.png",
      alt: "Self Breast Examination Awareness Poster",
      delay: 0.1,
      directionX: -20,
    },
    {
      src: "/posters/2.png",
      alt: "Breast Cancer Causes and Detection Poster",
      delay: 0.2,
      directionX: 20,
    },
    {
      src: "/posters/3.png",
      alt: "Early Symptoms and Prevention Awareness Poster",
      delay: 0.3,
      directionX: -20,
    },
    {
      src: "/posters/4.png",
      alt: "Screening and Diagnosis Guidelines Poster",
      delay: 0.4,
      directionX: 20,
    },
  ];

  return (
    <section className="py-20 bg-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            General <span className="text-primary">Awareness</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Important information and guidelines to keep in mind. Let's spread awareness together.
          </p>
        </motion.div>

        {/* Poster Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {posters.map((poster, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: poster.directionX }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: poster.delay }}
              className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group bg-white h-[450px] md:h-[500px] relative flex items-center justify-center"
            >
              <img 
                src={poster.src} 
                alt={poster.alt} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}