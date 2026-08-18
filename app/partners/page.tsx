"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Users, Building2, Stethoscope, ArrowRight } from "lucide-react";
import Recognition from "@/components/recognition";
import AwarenessPosters from "@/components/awareness-posters";

const partnerCategories = [
  {
    title: "Healthcare Partners",
    description:
      "Hospitals, diagnostic centers, and screening providers who help ensure early detection and accessible health services for women.",
    icon: Stethoscope,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Corporate Partners",
    description:
      "CSR supporters and awareness sponsors who enable us to scale initiatives and fund large-scale outreach programs.",
    icon: Building2,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "NGO & Institutional Partners",
    description:
      "Social organizations and institutions that amplify awareness, connect communities, and help us deliver impact where it matters most.",
    icon: Users,
    color: "bg-pink-50 text-pink-600",
  },
];

const partners = [
  {
    name: "AIIMS New Delhi",
    role: "Medical & Research Partner",
    image: "/img/logodelhi.png",
    description:
      "AIIMS is India's premier medical institution, renowned for excellence in healthcare, research, and education. Our partnership focuses on leveraging clinical expertise for accessible screening and medical support.",
  },
  {
    name: "Swaraj Vikas Foundation",
    role: "NGO Community Partner",
    image: "/img/ngodelhi.jpeg",
    description:
      "SVF is a dedicated non-profit organization committed to social development, empowerment, and inclusive growth across India.",
  },
  {
    name: "iNTELLYJELLY",
    role: "Publication House Partner",
    image: "/img/intellyjelly.png",
    description:
      "IntellyJelly Magazine is a platform focused on sharing meaningful ideas that drive social impact, highlighting topics like education, mental well-being, and women empowerment.",
  },
];

const PartnersPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-48 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight"
                >
                  Our <span className="text-primary">Partners</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10"
                >
                  We believe collaboration multiplies impact. Our partners help
                  us take our mission to communities that need it most.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a href='/form' target="_blank" rel="noopener noreferrer">
                  <button className="px-8 py-4 bg-primary text-white rounded-full font-bold transition-all flex items-center gap-2 group shadow-lg shadow-primary/20">
                    Become a Partner
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative hidden lg:block"
              >
                <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="./gallery/6.jpeg"
                    alt="Partnership and Community"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" />
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-[calc(100%+1.3px)] h-[80px] fill-white"
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

        <section className="bg-white py-24 mb-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Partner Categories</h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {partnerCategories.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[2.5rem] border border-primary/5 hover:border-primary/20 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8`}
                  >
                    <category.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partners in Action</h2>
            <p className="text-muted-foreground">
              The organizations making a real-world difference with us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-48 h-48 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center p-8 mb-8 group-hover:border-primary/30 transition-all duration-500">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="text-2xl font-bold mb-2">{partner.name}</h4>
                <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                  {partner.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* <Recognition /> */}

        <section className="container mx-auto px-4">
          <div className="bg-primary p-12 md:p-24 rounded-[3rem] text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                Let’s make a <br /> difference together.
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Join us in spreading awareness, encouraging early detection, and
                empowering women across communities.
              </p>
              <a href='/form' target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-slate-50 transition-colors flex items-center gap-2 group">
                Become a Partner
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              </a>
            </div>
            <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
              <img
                src="/new/1.jpeg"
                alt="Partner with us"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/50 to-transparent" />
            </div>
          </div>
        </section>
      </main>
      {/* <AwarenessPosters /> */}
      <Footer />
    </div>
  );
};

export default PartnersPage;
