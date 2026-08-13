"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import AwarenessPosters from "@/components/awareness-posters";
import Podcast from "@/components/podcast";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  SpeakerHigh as SpeakerHighIcon,
  SpeakerSlash as SpeakerSlashIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
} from "@phosphor-icons/react";
import { useInView } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Activity,
  ShieldCheck,
  Search,
  ExternalLink,
  Play,
} from "lucide-react";

const symptoms = [
  {
    title: "Lumps or Thickening",
    description: "A lump or area of thickened tissue in either breast.",
    icon: Search,
  },
  {
    title: "Skin Changes",
    description: "Dimpling, puckering, or redness of the breast skin.",
    icon: Activity,
  },
  {
    title: "Nipple Changes",
    description: "A change in the appearance of the nipple or discharge.",
    icon: AlertCircle,
  },
  {
    title: "Shape Alteration",
    description: "A change in the size or shape of one or both breasts.",
    icon: ShieldCheck,
  },
];

const preventionTips = [
  "Maintain a healthy weight through balanced diet",
  "Engage in regular physical activity (30+ mins daily)",
  "Limit alcohol consumption and avoid smoking",
  "Know your family medical history",
  "Breastfeed if possible, as it may reduce risk",
];

import YouTubeEmbed from "@/components/video-embed";
import Recognition from "@/components/recognition";

const AwarenessPage = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const isVideoInView = useInView(videoContainerRef, { amount: 0.3 });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoInView) {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isVideoInView]);

  const resources = [
    {
      title: "Empowering Young Minds: Cancer Awareness",
      type: "Video",
      videoId: "fqqv5PZ7GHs",
      link: "https://www.youtube.com/watch?v=fqqv5PZ7GHs",
      image: "/img/slider1.png",
      meta: "Watch on YouTube",
    },
    {
      title: "Understanding Breast Cancer",
      type: "Video",
      videoId: "nkPR4ar1EQ4",
      link: "https://www.youtube.com/watch?v=nkPR4ar1EQ4",
      image: "/img/slider2.png",
      meta: "Watch on YouTube",
    },
    {
      title: "Cancer Awareness Guide",
      type: "PDF",
      link: "/one.pdf",
      image: "/gallery/3.jpeg",
      meta: "Download",
    },
    {
      title: "Early Detection Manual",
      type: "PDF",
      link: "/two.pdf",
      image: "/gallery/1.jpeg",
      meta: "Download",
    },
    {
      title: "Prevention Handbook",
      type: "PDF",
      link: "/three.pdf",
      image: "/gallery/2.jpeg",
      meta: "Download",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-48 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight text-foreground"
                >
                  Knowledge is <br />
                  <span className="text-primary">Power.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10"
                >
                  Early detection is the most powerful tool we have in the fight
                  against cancer. Understanding the signs and regular screenings
                  can make all the difference.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <button
                    onClick={() => document.getElementById('symptoms')?.scrollIntoView({ behavior: 'smooth' })}
                    className="cursor-pointer px-8 py-4 bg-primary text-white rounded-full font-bold hover:scale-101 transition-transform shadow-lg shadow-primary/20"
                  >
                    View Symptoms
                  </button>
                  <button
                    onClick={() => document.getElementById('screening')?.scrollIntoView({ behavior: 'smooth' })}
                    className="cursor-pointer px-8 py-4 bg-white text-foreground border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-colors"
                  >
                    Screening Guide
                  </button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="relative hidden lg:block"
                ref={videoContainerRef}
              >
                <div
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group/video cursor-pointer"
                  onClick={togglePlay}
                >
                  <video
                    ref={videoRef}
                    src="/videos/1.mp4"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full aspect-video object-cover"
                  />

                  {/* Premium Controls Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={false}
                      animate={{ scale: isPlaying ? 0.8 : 1 }}
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white"
                    >
                      {isPlaying ? (
                        <PauseIcon weight="fill" className="w-10 h-10" />
                      ) : (
                        <PlayIcon weight="fill" className="w-10 h-10 ml-1" />
                      )}
                    </motion.div>
                  </div>

                  <button
                    onClick={toggleMute}
                    className="absolute bottom-6 right-6 p-3 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/20 transition-all hover:bg-black/60 hover:scale-110 active:scale-95 z-10"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <SpeakerSlashIcon weight="bold" className="w-6 h-6" />
                    ) : (
                      <SpeakerHighIcon weight="bold" className="w-6 h-6" />
                    )}
                  </button>

                  <div className="absolute inset-0 bg-black/10 pointer-events-none transition-opacity group-hover/video:opacity-0" />
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

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-primary/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="text-[12rem] md:text-[18rem] font-bold text-primary/10 leading-none absolute -top-20 -left-10 select-none">
                    90%
                  </div>
                  <div className="relative z-20">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                      Survival Rate is <span className="text-primary">90%</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      Breast cancer is treatable and has a high survival rate
                      when detected early. Most cases diagnosed in Stage 1 have
                      a 90% or higher survival rate.
                    </p>
                  </div>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { label: "Early Detection", value: "Saves Lives" },
                    { label: "Monthly Exams", value: "Mandatory" },
                    { label: "Annual Checks", value: "Recommended" },
                    { label: "Hope", value: "Never Fades" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-primary/10 flex flex-col justify-center items-center text-center"
                    >
                      <span className="text-primary font-bold text-lg sm:text-xl mb-2">
                        {stat.value}
                      </span>
                      <span className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="symptoms" className="py-24 bg-secondary/10 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
              >
                Signs & <span className="text-primary">Symptoms</span>
              </motion.h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Be aware of changes in your body. If you notice any of these
                signs, consult a healthcare professional immediately.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {symptoms.map((symptom, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-sm transition-all duration-500 group border border-transparent hover:border-primary/20 flex flex-col"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 transition-transform duration-500">
                    <symptom.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {symptom.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {symptom.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="screening" className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative rounded-[3rem] aspect-square overflow-hidden shadow-2xl">
                  {/* <img
                    src="/gallery/8.jpeg"
                    alt="Screening awareness"
                    className="w-full h-full object-cover"
                  /> */}
                    <img
                    src="/new/2.jpg"
                    alt="Screening awareness"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                </div>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                  Screening <span className="text-primary">Guidelines</span>
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      title: "Monthly Self-Examination",
                      desc: "Perform a breast self-exam every month to become familiar with how your breasts normally look and feel.",
                    },
                    {
                      title: "Clinical Breast Exam",
                      desc: "Have a clinical breast exam by a healthcare professional at least every 3 years starting at age 20, and annually after age 40.",
                    },
                    {
                      title: "Annual Mammogram",
                      desc: "Women age 40 and older should have a mammogram every year to screen for breast cancer.",
                    },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div> */}


              <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="w-full lg:w-1/2"
>
  <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
    Screening <span className="text-primary">Guidelines</span>
  </h2>
  
  <div className="space-y-8 mb-8">
    {[
      {
        title: "Monthly Self-Examination",
        desc: "Perform a breast self-exam every month to become familiar with how your breasts normally look and feel.",
      },
      {
        title: "Clinical Breast Exam",
        desc: "Have a clinical breast exam by a healthcare professional at least every 3 years starting at age 20, and annually after age 40.",
      },
      {
        title: "Annual Mammogram",
        desc: "Women age 40 and older should have a mammogram every year to screen for breast cancer.",
      },
    ].map((step, i) => (
      <div key={i} className="flex gap-6">
        <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">
          {i + 1}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {step.desc}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Saiyette "Care Check" Feature Card */}
  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-3">
    <div className="flex items-center gap-2 text-primary font-semibold">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
      </span>
      <span>Saiyette Care Check Web App</span>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">
      Track your health journey seamlessly. Access personalized screening schedules, self-exam reminders, and comprehensive health monitoring tools all in one place.
    </p>
    <a
      href="https://carecheck-one.vercel.app/" 
      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline pt-1"
    >
      Explore Care Check App &rarr;
    </a>
  </div>
</motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary/20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Prevention is <span className="text-primary">Possible</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  While not all cases can be prevented, adopting a healthy
                  lifestyle can significantly lower your risk.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-12 rounded-[3rem] shadow-sm border border-primary/5"
                >
                  <ul className="space-y-6">
                    {preventionTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2
                          className="text-primary mt-1 shrink-0"
                          size={20}
                        />
                        <span className="text-lg text-foreground font-medium">
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/gallery/1.jpeg"
                      className="rounded-3xl shadow-lg"
                      alt=""
                    />
                    <img
                      src="/gallery/2.jpeg"
                      className="rounded-3xl shadow-lg mt-8"
                      alt=""
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
                  <span>INTELLYJELLY FEATURE</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  IntellyJelly <span className="text-primary">Presentation</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Watch the official presentation video, capturing the recognition and journey of Saiyette's breast cancer awareness advocacy featured by IntellyJelly.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white z-10 bg-white">
                  <YouTubeEmbed
                    videoId="/videos/IntellyJelly Presentation.mp4"
                    title="IntellyJelly Presentation"
                    className="w-full aspect-video"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0" />
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-secondary/15 rounded-full blur-3xl z-0" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* <Recognition /> */}

        <section className="py-24 overflow-hidden bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Educational <span className="text-primary">Resources</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Watch tutorials, download guides, and stay informed with our
                multimedia content.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12">
              {resources.map((resource, i) => (
                <div
                  key={i}
                  className={`group ${i < 3
                    ? "lg:col-span-2"
                    : i === 3
                      ? "lg:col-start-2 lg:col-span-2"
                      : "lg:col-span-2"
                    } ${i === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}
                >
                  <div
                    className={
                      i === 4 ? "md:max-w-md md:mx-auto w-full" : "w-full"
                    }
                  >
                    {resource.type === "Video" ? (
                      <div className="mb-6">
                        <YouTubeEmbed
                          videoId={resource.videoId!}
                          title={resource.title}
                        />
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative aspect-video rounded-[2rem] overflow-hidden mb-6 shadow-lg cursor-pointer"
                        onClick={() => window.open(resource.link, "_blank")}
                      >
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-primary group-hover:border-primary transition-all duration-500 scale-90 group-hover:scale-100">
                            <ExternalLink />
                          </div>
                        </div>
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-primary text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                          {resource.type}
                        </div>
                      </motion.div>
                    )}
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {resource.meta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <AwarenessPosters />
      {/* <Podcast /> */}
      <CTA />

      <Footer />
    </div>
  );
};

export default AwarenessPage;
