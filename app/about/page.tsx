"use client";

import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import AwarenessPosters from "@/components/awareness-posters";
import Podcast from "@/components/podcast";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-48 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="row-span-2 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                  <img
                    src="/gallery/5.jpeg"
                    alt="Gallery 5"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                  <img
                    src="/gallery/6.jpeg"
                    alt="Gallery 6"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                  <img
                    src="/img/Saiyette_img.jpeg"
                    alt="Saiyette"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 text-left text-foreground"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Hello, I&apos;m <span className="text-primary">Saiyette.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary/80">
                Welcome to Pink For Purpose
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-muted-foreground">
                Unlocking dreams through compassion. At Pink For Purpose, we
                believe small acts of kindness create powerful change. Join us
                as we support meaningful causes and spread hope one step at a
                time.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                My passion for this work grew from a personal loss. My
                grandmother bravely fought breast cancer, and witnessing the
                physical and emotional toll it took on her and our family
                changed the way I saw the world. Her resilience continues to
                inspire me to stand with others facing the same battle.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[120px] fill-white"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".1"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".2"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden">
              <img
                src="/new/about.png"
                alt=""
                className="aspect-square object-cover mx-auto rounded-2xl"
              />
            </div>

            <div className="w-full lg:w-1/2 text-left text-foreground">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Founder&apos;s <span className="text-primary">Vision</span>
              </h2>
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-6 italic text-primary">
                &ldquo;No one should feel alone in their fight against cancer.
                Awareness, early detection, and compassionate support can save
                lives and restore hope.&rdquo;
              </blockquote>
              <p className="text-lg md:text-xl leading-relaxed">
                My goal, through this overall cancer care support initiative, is
                to support the full cancer-care journey from awareness and
                fundraising for treatment to emotional support for families and
                uplifting survivors. Whether it&apos;s donating hair, raising
                funds for medical care, or spreading knowledge about early
                detection, every effort is directed toward making sure no one
                feels alone in their fight against cancer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pink For Purpose began with a simple yet powerful belief — that
              awareness can save lives. What started as a small initiative
              quickly grew into a movement dedicated to women’s health, early
              detection, and community empowerment.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-full bg-linear-to-b from-primary via-primary/50 to-transparent"
              />
            </div>

            <div className="space-y-6 md:space-y-6">
              {[
                {
                  year: "2021",
                  title: "Community Awareness Initiatives",
                  description:
                    "Initial outreach programs focused on educating communities about early detection and preventive health practices.",
                },
                {
                  year: "2022",
                  title: "Content Creation & Hair Donation Drive",
                  description:
                    "Expanding our reach through digital content and launching our first major hair donation campaign for cancer patients.",
                },
                {
                  year: "2023",
                  title: "Community Growth & Partnerships",
                  description:
                    "Collaborating with local health organizations and building a stronger network of survivors and supporters.",
                },
                {
                  year: "2024",
                  title: "Program Expansion & Impact Development",
                  description:
                    "Scaling our initiatives to reach more regions and formalizing our impact assessment models to better serve the community.",
                },
                {
                  year: "2025",
                  title: "CMP (Community Mentorship Program)",
                  description:
                    "Launching a dedicated program to connect newly diagnosed patients with survivors for emotional and practical guidance.",
                },
                {
                  year: "2026",
                  title: "Podcast & Video Initiatives",
                  description:
                    "Sharing powerful stories of resilience through multimedia platforms to inspire and inform a global audience.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center justify-between w-full ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Container */}
                  <div className="w-full md:w-[45%] ml-12 md:ml-0 group">
                    <div className="bg-white/50 backdrop-blur-md p-8 rounded-3xl border border-gray-100 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5 duration-500 relative overflow-hidden h-full">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="text-6xl font-bold tracking-tighter">
                          {item.year}
                        </span>
                      </div>
                      <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot on line */}
                  <div className="absolute left-[20px] md:left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-lg -translate-x-1/2 z-20 group-hover:scale-125 transition-transform duration-300" />

                  {/* Empty space for desktop zigzag */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <AwarenessPosters /> */}
      <CTA />
      <Footer />
    </>
  );
};

export default About;
