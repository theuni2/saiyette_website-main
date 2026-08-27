"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  FileText,
  ExternalLink,
  Eye,
  Download,
  X,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Video,
} from "lucide-react";
import { ArrowUpRightIcon, InstagramLogo } from "@phosphor-icons/react";
import InstagramEmbed from "./instagram-embed";

interface Testimonial {
  id: string;
  doctorName: string;
  doctorRole: string;
  institution: string;
  quote: string;
  imageSrc: string;
  pdfSrc: string;
  tag: string;
  logoText: string;
}

const testimonials: Testimonial[] = [
  {
    id: "renu-sehgal",
    doctorName: "Dr. Renu Raina Sehgal",
    doctorRole: "Chairperson, Dept. of Obstetrics & Gynecology",
    institution: "Artemis and Daffodils Hospitals",
    quote:
      "CareCheck elegantly solves this by turning an intimidating, private worry into a structured, manageable plan. It empowers women to overcome shame, understand their bodies, and seek timely care. As a physician, I highly endorse this beautifully designed tool.",
    imageSrc: "/care/6.jpg",
    pdfSrc: "/care/2.pdf",
    tag: "Artemis Hospitals",
    logoText: "ARTEMIS",
  },
  {
    id: "adhip-mandal",
    doctorName: "Dr. Adhip Mandal",
    doctorRole: "Consultant Surgeon",
    institution: "NHS East Suffolk and North Essex NHS Foundation Trust, UK",
    quote:
      "Care Check Health Companion is an innovative and thoughtfully designed digital platform that supports women in developing confidence and awareness in breast self-examination. Importantly, the app approaches this sensitive subject with compassion and balance.",
    imageSrc: "/care/7.jpg",
    pdfSrc: "/care/3.pdf",
    tag: "NHS Trust UK",
    logoText: "NHS",
  },
  {
    id: "shilpi-sachdev",
    doctorName: "Dr. Shilpi Sachdev",
    doctorRole: "Senior Consultant Obstetrician & Gynaecologist",
    institution: "Apollo Cradle / Clinic for Women",
    quote:
      "CareCheck is a user friendly, accessible and innovative approach to women's health education. This newly developed self breast examination app is a valuable and timely digital initiative. Its major strength is its simple and convenient step-by-step digital approach for early detection.",
    imageSrc: "/care/5.jpg",
    pdfSrc: "/care/1.pdf",
    tag: "Apollo Cradle",
    logoText: "APOLLO",
  },
  {
    id: "shweta-soni",
    doctorName: "Dr. Shweta Soni, MD",
    doctorRole: "Physician, Family Medicine",
    institution: "Lancaster General Hospital / Penn Medicine",
    quote:
      "An indispensable tool for preventive health. Early detection begins with self-awareness, and this app makes taking charge of personal health simple, accessible, and intuitive. It's inspiring to see technology used to demystify breast self-exams.",
    imageSrc: "/care/9.jpg",
    pdfSrc: "/care/4.pdf",
    tag: "Penn Medicine",
    logoText: "PENN MEDICINE",
  },
];

export const CareCheckSection = () => {
  const [selectedPreview, setSelectedPreview] = useState<{
    type: "image" | "pdf";
    url: string;
    title: string;
  } | null>(null);

  const [activeFilter, setActiveFilter] = useState<"all" | "image" | "pdf">(
    "all"
  );

  return (
    <section
      id="care-check"
      className="py-24 bg-gradient-to-b from-white via-primary/[0.03] to-white relative overflow-hidden"
    >
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Care Check App Feature Hero Banner */}
        <div className="bg-gradient-to-br from-primary/10 via-white to-primary/5 rounded-[3rem] p-8 md:p-16 border border-primary/20 shadow-xl shadow-primary/5 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-primary/20">
                <Sparkles size={14} className="animate-pulse" />
                <span>Saiyette Care Check Web App</span>
              </div>

              {/* Main Headline requested by user */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
                &ldquo;You know your body best.{" "}
                <span className="text-primary block sm:inline">
                  We&apos;re here to support you.&rdquo;
                </span>
              </h2>

              {/* Subheading requested by user */}
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                Accessible breast health support, whenever you need it. Gentle
                guidance designed for your emotional and physical well-being.
              </p>

              {/* Bullet Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-primary/10 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Heart size={20} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    Step-by-Step Self Exam Guidance
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-primary/10 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    100% Private & Confidential
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://carecheck-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-primary/25 transition-all hover:scale-102 active:scale-98"
                >
                  <span>Launch Care Check App</span>
                  <ArrowUpRightIcon size={22} weight="bold" />
                </a>

                <a
                  href="#doctor-endorsements"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-foreground border border-gray-200 font-bold px-7 py-4 rounded-full text-lg shadow-sm transition-all"
                >
                  <span>View Doctor Reviews</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Right Interactive Preview Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-[2.5rem] p-6 shadow-2xl border border-primary/15 relative overflow-hidden group">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-xs font-semibold text-muted-foreground ml-2">
                      carecheck-one.vercel.app
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Live Web App
                  </span>
                </div>

                {/* Card graphic representation */}
                <div className="bg-gradient-to-br from-primary/10 via-pink-50 to-white rounded-2xl p-6 border border-primary/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary tracking-wider uppercase">
                      Breast Health Companion
                    </span>
                    <Award className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Empowering Early Self-Detection
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Designed to eliminate anxiety and taboos with intuitive,
                    guided self-checks and personalized reminders.
                  </p>
                  <a
                    href="https://carecheck-one.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white text-sm font-bold py-3 rounded-xl shadow-md hover:bg-primary/90 transition-all"
                  >
                    <span>Open App Experience</span>
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-xs text-muted-foreground px-2">
                  <span className="flex items-center gap-1 font-medium">
                    <CheckCircle2 size={14} className="text-primary" />
                    Clinically Validated
                  </span>
                  <span className="font-semibold text-primary">
                    Free & Instant Access
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Care Check Instagram Video Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-16 bg-gradient-to-r from-pink-500/10 via-white to-primary/10 rounded-[3rem] p-8 md:p-14 border border-primary/20 shadow-xl shadow-primary/5 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Instagram Video Embed */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
                <InstagramEmbed
                  url="https://www.instagram.com/p/Db760TWDHa1/"
                  title="Care Check Instagram Feature Video"
                  className="w-full h-full rounded-[2.3rem]"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold shadow-lg border border-white/20">
                    <InstagramLogo size={14} className="text-pink-400" />
                    Instagram Feature
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Story & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 font-bold text-xs uppercase tracking-wider">
                <Video size={15} />
                <span>Care Check Video Feature</span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                See Care Check <span className="text-primary">in Action</span>
              </h3>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Watch the official feature video sharing the inspiration, compassionate approach, and how Care Check is making breast health guidance accessible to every woman.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/90 border border-primary/10 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 shrink-0 mt-0.5">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base">Gentle & Compassionate Guidance</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                      Empowering women with easy-to-follow, stress-free self-examination steps designed for emotional and physical comfort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/90 border border-primary/10 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base">Overcoming Taboos & Fear</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                      Replacing hesitation with private, safe, and structured self-awareness tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://www.instagram.com/p/Db760TWDHa1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:opacity-95 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-lg shadow-pink-500/20 transition-all hover:scale-102"
                >
                  <InstagramLogo size={18} />
                  <span>Watch Full Video on Instagram</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href="https://carecheck-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md transition-all hover:scale-102"
                >
                  <span>Try Care Check Web App</span>
                  <ArrowUpRightIcon size={18} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 2: Clinical & Medical Testimonials */}
        <div id="doctor-endorsements" className="mt-16 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider"
            >
              <Award size={16} />
              <span>Medical Endorsements & Testimonials</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
            >
              Endorsed by Leading <span className="text-primary">Doctors & Hospitals</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Read official letters of endorsement and clinical testimonials from
              renowned gynaecologists, surgeons, and medical institutions.
            </motion.p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[2.5rem] p-8 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col justify-between hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Top institution tag */}
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wide">
                      {item.tag}
                    </span>
                    <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                      {item.logoText}
                    </span>
                  </div>

                  {/* Doctor Info */}
                  <div>
                    <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.doctorName}
                    </h4>
                    <p className="text-sm font-semibold text-primary">
                      {item.doctorRole}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.institution}
                    </p>
                  </div>

                  {/* Quote Excerpt */}
                  <div className="relative pl-4 border-l-4 border-primary/30 py-1">
                    <p className="text-gray-700 italic text-base leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Bottom Actions: View Image Scan & View PDF */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                  {/* View Image Letterhead */}
                  <button
                    onClick={() =>
                      setSelectedPreview({
                        type: "image",
                        url: item.imageSrc,
                        title: `${item.doctorName} - Official Letterhead Scan`,
                      })
                    }
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gray-50 hover:bg-primary/10 hover:text-primary text-gray-700 font-semibold text-xs transition-all border border-gray-200 hover:border-primary/20 cursor-pointer"
                  >
                    <Eye size={16} />
                    <span>Letterhead Scan (Image)</span>
                  </button>

                  {/* View / Download PDF */}
                  {/* <a
                    href={item.pdfSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-primary text-white font-semibold text-xs transition-all hover:bg-primary/90 shadow-md shadow-primary/20"
                  >
                    <FileText size={16} />
                    <span>Official PDF Letter</span>
                    <Download size={14} className="ml-0.5" />
                  </a> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick PDF Document Hub */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-primary/15 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
              <div>
                <h4 className="text-2xl font-bold text-foreground">
                  Official Endorsement PDF Documents
                </h4>
                <p className="text-sm text-muted-foreground">
                  Direct access to full official endorsement letters and verification PDFs from public/care folder.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="text-primary" size={24} />
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  4 PDF Documents Available
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Artemis Hospitals Endorsement",
                  doctor: "Dr. Naoline Sinha",
                  pdf: "/care/1.pdf",
                  image: "/care/5.jpg",
                },
                {
                  title: "Fortis Hospitals Endorsement",
                  doctor: "Dr. Smita Vats",
                  pdf: "/care/2.pdf",
                  image: "/care/6.jpg",
                },
                {
                  title: "Swaraj Vikas Foundation",
                  doctor: "Mr. Narendra Singh",
                  pdf: "/care/3.pdf",
                  image: "/care/7.jpg",
                },
                {
                  title: "UCONN Health",
                  doctor: "Dr. Sukhda Monga",
                  pdf: "/care/4.pdf",
                  image: "/care/9.jpg",
                },
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-primary/30 hover:bg-primary/[0.02] transition-all space-y-3 flex flex-col justify-between group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-primary font-bold">
                      <span>DOCUMENT #{idx + 1}</span>
                      <FileText size={16} />
                    </div>
                    <h5 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                      {doc.title}
                    </h5>
                    <p className="text-xs text-muted-foreground">{doc.doctor}</p>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <a
                      href={doc.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-sm"
                    >
                      <Download size={14} />
                      <span>Download PDF</span>
                    </a>
                    {/* <button
                      onClick={() =>
                        setSelectedPreview({
                          type: "image",
                          url: doc.image,
                          title: `${doc.title} (${doc.doctor})`,
                        })
                      }
                      className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-primary hover:border-primary/30 transition-all"
                      title="Quick Preview Letter Image"
                    >
                      <Maximize2 size={15} />
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal for Image Preview */}
      <AnimatePresence>
        {selectedPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedPreview(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 md:px-6 md:py-4 bg-gray-900 text-white flex items-center justify-between border-b border-gray-800">
                <span className="font-bold text-sm md:text-base truncate pr-4">
                  {selectedPreview.title}
                </span>
                <button
                  onClick={() => setSelectedPreview(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-gray-100">
                {selectedPreview.type === "image" ? (
                  <img
                    src={selectedPreview.url}
                    alt={selectedPreview.title}
                    className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-md"
                  />
                ) : (
                  <iframe
                    src={selectedPreview.url}
                    className="w-full h-[75vh] rounded-xl"
                    title={selectedPreview.title}
                  />
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Official Verification Scan &bull; Saiyette Care Check
                </span>
                <a
                  href={selectedPreview.url}
                  target="_blank"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all shadow-md"
                >
                  <Download size={14} />
                  <span>Open Full Screen / Download</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CareCheckSection;
