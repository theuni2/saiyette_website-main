// "use client";

// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import CTA from "@/components/cta";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import {
//   Heart,
//   Handshake,
//   Users,
//   Mic,
//   GraduationCap,
//   Stethoscope,
//   Newspaper,
//   MessageSquare,
//   CheckCircle2,
//   Send,
//   Loader2,
//   Building2,
//   Globe,
//   MapPin,
//   Mail,
//   Phone,
//   User,
//   Calendar,
//   Sparkles,
// } from "lucide-react";

// // Enquiry categories config
// const ENQUIRY_TYPES = [
//   {
//     id: "volunteer",
//     label: "Volunteer",
//     icon: Users,
//     description: "Join our core team and make an impact on the ground.",
//   },
//   {
//     id: "donation",
//     label: "Donation / Support",
//     icon: Heart,
//     description: "Support our cancer awareness and screening initiatives.",
//   },
//   {
//     id: "partnership",
//     label: "Become a Partner",
//     icon: Handshake,
//     description: "Collaborate with us as an NGO, company, or institution.",
//   },
//   {
//     id: "podcast",
//     label: "Feature on Podcast",
//     icon: Mic,
//     description: "Share your story, expert insight, or advocate's journey.",
//   },
//   {
//     id: "school",
//     label: "School Session",
//     icon: GraduationCap,
//     description: "Invite Pink for Purpose for an awareness workshop.",
//   },
//   {
//     id: "healthcare",
//     label: "Healthcare Collab",
//     icon: Stethoscope,
//     description: "Join as a medical expert, doctor, or health provider.",
//   },
//   {
//     id: "media",
//     label: "Media / Press",
//     icon: Newspaper,
//     description: "Press coverage, interviews, or publication inquiries.",
//   },
//   {
//     id: "general",
//     label: "General Enquiry",
//     icon: MessageSquare,
//     description: "Have a general question or message for our team?",
//   },
// ];

// export default function GetInvolvedPage() {
//   const searchParams = useSearchParams();
//   const [selectedType, setSelectedType] = useState("volunteer");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Sync category selection with URL query parameter (e.g. /get-involved?type=donation)
//   useEffect(() => {
//     const typeParam = searchParams.get("type");
//     if (typeParam && ENQUIRY_TYPES.some((t) => t.id === typeParam)) {
//       setSelectedType(typeParam);
//     }
//   }, [searchParams]);

//   // Form State
//   const [formData, setFormData] = useState({
//     // Basic Details
//     fullName: "",
//     email: "",
//     phone: "",
//     organisation: "",
//     city: "",
//     country: "",
//     message: "",

//     // Dynamic Fields
//     donationSupportType: "",
//     orgType: "",
//     orgWebsite: "",
//     podcastRole: "",
//     volunteerAreas: "",
//     volunteerAvailability: "",
//     schoolName: "",
//     audienceSize: "",
//     preferredDates: "",
//     medicalSpecialty: "",
//     collabInterests: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const activeCategory = ENQUIRY_TYPES.find((t) => t.id === selectedType)?.label || selectedType;
//     const emailSubject = `[${activeCategory}] ${formData.fullName}${formData.organisation ? ` - ${formData.organisation}` : ""}`;

//     // Prepare payload for Formspree / Web3Forms / your backend API route
//     const payload = {
//       _subject: emailSubject,
//       _to: "pinkforpurpose@gmail.com",
//       enquiryCategory: activeCategory,
//       ...formData,
//     };

//     try {
//       // NOTE: Replace this endpoint with your form backend solution
//       // Example using Web3Forms or Formspree:
//       // await fetch("https://api.web3forms.com/submit", {
//       //   method: "POST",
//       //   headers: { "Content-Type": "application/json" },
//       //   body: JSON.stringify(payload),
//       // });

//       // Simulated network delay
//       await new Promise((resolve) => setTimeout(resolve, 1200));

//       setIsSubmitting(false);
//       setIsSubmitted(true);
//     } catch (error) {
//       console.error("Submission failed", error);
//       setIsSubmitting(false);
//       alert("Something went wrong while sending your request. Please try again.");
//     }
//   };

//   const activeCategory = ENQUIRY_TYPES.find((t) => t.id === selectedType);

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-background">
//       <Navbar />

//       <main>
//         {/* Hero Section */}
//         <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 via-secondary/10 to-background overflow-hidden">
//           <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6"
//             >
//               <Sparkles className="w-4 h-4" />
//               <span>JOIN OUR MISSION</span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
//             >
//               Get Involved with <br />
//               <span className="text-primary">Pink for Purpose.</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
//             >
//               Whether you wish to support our cause, partner with us, host a workshop, or volunteer, we'd love to collaborate with you.
//             </motion.p>
//           </div>
//         </section>

//         {/* Main Content Section */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4 max-w-5xl">
//             {/* Category Selector */}
//             <div className="mb-12">
//               <h2 className="text-2xl font-bold mb-3 text-center">
//                 How would you like to get involved?
//               </h2>
//               <p className="text-muted-foreground text-center mb-8">
//                 Select an option below so we can tailor the details for you.
//               </p>

//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
//                 {ENQUIRY_TYPES.map((type) => {
//                   const Icon = type.icon;
//                   const isSelected = selectedType === type.id;
//                   return (
//                     <button
//                       key={type.id}
//                       type="button"
//                       onClick={() => {
//                         setSelectedType(type.id);
//                         setIsSubmitted(false);
//                       }}
//                       className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 flex flex-col justify-between h-32 cursor-pointer ${
//                         isSelected
//                           ? "border-primary bg-primary/5 text-primary shadow-md scale-[1.02]"
//                           : "border-gray-100 bg-gray-50/50 hover:bg-gray-100/80 text-foreground hover:border-gray-200"
//                       }`}
//                     >
//                       <div className="flex items-center justify-between w-full">
//                         <div
//                           className={`w-10 h-10 rounded-xl flex items-center justify-center ${
//                             isSelected
//                               ? "bg-primary text-white"
//                               : "bg-white text-muted-foreground border border-gray-100"
//                           }`}
//                         >
//                           <Icon size={20} />
//                         </div>
//                         {isSelected && (
//                           <span className="w-2.5 h-2.5 rounded-full bg-primary" />
//                         )}
//                       </div>
//                       <span className="font-bold text-sm sm:text-base leading-tight">
//                         {type.label}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Form Container */}
//             <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl p-8 md:p-12 relative overflow-hidden">
//               {/* Active Category Banner */}
//               {activeCategory && (
//                 <div className="flex items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10 mb-8">
//                   <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
//                     <activeCategory.icon size={20} />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg leading-snug">
//                       {activeCategory.label}
//                     </h3>
//                     <p className="text-sm text-muted-foreground">
//                       {activeCategory.description}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               <AnimatePresence mode="wait">
//                 {isSubmitted ? (
//                   /* Confirmation View */
//                   <motion.div
//                     key="success"
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                     className="text-center py-12 space-y-6"
//                   >
//                     <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
//                       <CheckCircle2 size={48} />
//                     </div>
//                     <h3 className="text-3xl font-bold">Thank You for Reaching Out!</h3>
//                     <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
//                       We have received your enquiry regarding <strong>{activeCategory?.label}</strong>. Our team will review your message and reach out to you shortly.
//                     </p>
//                     <button
//                       type="button"
//                       onClick={() => setIsSubmitted(false)}
//                       className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20 cursor-pointer"
//                     >
//                       Submit Another Enquiry
//                     </button>
//                   </motion.div>
//                 ) : (
//                   /* Form View */
//                   <motion.form
//                     key="form"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     onSubmit={handleSubmit}
//                     className="space-y-8"
//                   >
//                     {/* SECTION 1: Basic Information */}
//                     <div>
//                       <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
//                         1. Basic Contact Information
//                       </h4>
//                       <div className="grid md:grid-cols-2 gap-6">
//                         <div>
//                           <label className="block text-sm font-medium mb-2 text-foreground">
//                             Full Name <span className="text-primary">*</span>
//                           </label>
//                           <div className="relative">
//                             <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
//                             <input
//                               type="text"
//                               name="fullName"
//                               required
//                               value={formData.fullName}
//                               onChange={handleInputChange}
//                               placeholder="Jane Doe"
//                               className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
//                             />
//                           </div>
//                         </div>

//                         <div>
//                           <label className="block text-sm font-medium mb-2 text-foreground">
//                             Email Address <span className="text-primary">*</span>
//                           </label>
//                           <div className="relative">
//                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
//                             <input
//                               type="email"
//                               name="email"
//                               required
//                               value={formData.email}
//                               onChange={handleInputChange}
//                               placeholder="jane@example.com"
//                               className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
//                             />
//                           </div>
//                         </div>

//                         <div>
//                           <label className="block text-sm font-medium mb-2 text-foreground">
//                             Phone Number <span className="text-xs text-muted-foreground">(Optional)</span>
//                           </label>
//                           <div className="relative">
//                             <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
//                             <input
//                               type="tel"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleInputChange}
//                               placeholder="+1 (555) 000-0000"
//                               className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
//                             />
//                           </div>
//                         </div>

//                         <div>
//                           <label className="block text-sm font-medium mb-2 text-foreground">
//                             Organisation / School <span className="text-xs text-muted-foreground">(Optional)</span>
//                           </label>
//                           <div className="relative">
//                             <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
//                             <input
//                               type="text"
//                               name="organisation"
//                               value={formData.organisation}
//                               onChange={handleInputChange}
//                               placeholder="Company, Hospital, or School name"
//                               className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
//                             />
//                           </div>
//                         </div>

//                         <div>
//                           <label className="block text-sm font-medium mb-2 text-foreground">
//                             City <span className="text-primary">*</span>
//                           </label>
//                           <div className="relative">
//                             <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
//                             <input
//                               type="text"
//                               name="city"
//                               required
//                               value={formData.city}
//                               onChange={handleInputChange}
//                               placeholder="New York, London, Delhi..."
//                               className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
//                             />
//                           </div>
//                         </div>

//                         <div>
//                           <label className="block text-sm font-medium mb-2 text-foreground">
//                             Country <span className="text-primary">*</span>
//                           </label>
//                           <div className="relative">
//                             <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
//                             <input
//                               type="text"
//                               name="country"
//                               required
//                               value={formData.country}
//                               onChange={handleInputChange}
//                               placeholder="Country"
//                               className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* SECTION 2: Dynamic Category Questions */}
//                     <div>
//                       <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
//                         2. Enquiry Specific Details
//                       </h4>

//                       {/* DONATION */}
//                       {selectedType === "donation" && (
//                         <div className="space-y-4">
//                           <label className="block text-sm font-medium text-foreground">
//                             How would you like to support our mission?
//                           </label>
//                           <select
//                             name="donationSupportType"
//                             value={formData.donationSupportType}
//                             onChange={handleInputChange}
//                             className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
//                           >
//                             <option value="">Select support type...</option>
//                             <option value="Direct Financial Contribution">Direct Financial Support / Sponsorship</option>
//                             <option value="Sponsoring Screening Camps">Sponsoring Screening Camps & Equipment</option>
//                             <option value="In-Kind Support / Resources">In-Kind Resource / Educational Kit Support</option>
//                             <option value="Corporate CSR Partnership">Corporate CSR Support</option>
//                           </select>
//                         </div>
//                       )}

//                       {/* PARTNERSHIP */}
//                       {selectedType === "partnership" && (
//                         <div className="grid md:grid-cols-2 gap-6">
//                           <div>
//                             <label className="block text-sm font-medium mb-2 text-foreground">
//                               Organisation Type
//                             </label>
//                             <select
//                               name="orgType"
//                               value={formData.orgType}
//                               onChange={handleInputChange}
//                               className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
//                             >
//                               <option value="">Select type...</option>
//                               <option value="NGO / Non-Profit">NGO / Non-Profit</option>
//                               <option value="Hospital / Healthcare Institution">Hospital / Healthcare Institution</option>
//                               <option value="School / Educational Institution">School / Educational Institution</option>
//                               <option value="Corporate / Enterprise">Corporate / Enterprise</option>
//                               <option value="Other">Other</option>
//                             </select>
//                           </div>
//                           <div>
//                             <label className="block text-sm font-medium mb-2 text-foreground">
//                               Website <span className="text-xs text-muted-foreground">(Optional)</span>
//                             </label>
//                             <input
//                               type="url"
//                               name="orgWebsite"
//                               value={formData.orgWebsite}
//                               onChange={handleInputChange}
//                               placeholder="https://example.org"
//                               className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
//                             />
//                           </div>
//                         </div>
//                       )}

//                       {/* PODCAST */}
//                       {selectedType === "podcast" && (
//                         <div className="space-y-4">
//                           <label className="block text-sm font-medium text-foreground">
//                             Your Designation / Role
//                           </label>
//                           <input
//                             type="text"
//                             name="podcastRole"
//                             value={formData.podcastRole}
//                             onChange={handleInputChange}
//                             placeholder="e.g. Oncologist, Survivor Advocate, Health Researcher"
//                             className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
//                           />
//                         </div>
//                       )}

//                       {/* VOLUNTEER */}
//                       {selectedType === "volunteer" && (
//                         <div className="grid md:grid-cols-2 gap-6">
//                           <div>
//                             <label className="block text-sm font-medium mb-2 text-foreground">
//                               Areas You Can Help With
//                             </label>
//                             <input
//                               type="text"
//                               name="volunteerAreas"
//                               value={formData.volunteerAreas}
//                               onChange={handleInputChange}
//                               placeholder="e.g. Community Outreach, Content Creation, Event Hosting"
//                               className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-sm font-medium mb-2 text-foreground">
//                               Weekly Availability
//                             </label>
//                             <select
//                               name="volunteerAvailability"
//                               value={formData.volunteerAvailability}
//                               onChange={handleInputChange}
//                               className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
//                             >
//                               <option value="">Select availability...</option>
//                               <option value="1-3 hours / week">1–3 hours / week</option>
//                               <option value="3-5 hours / week">3–5 hours / week</option>
//                               <option value="5+ hours / week">5+ hours / week</option>
//                               <option value="Event-based only">Event-based only</option>
//                             </select>
//                           </div>
//                         </div>
//                       )}

//                       {/* SCHOOL WORKSHOP */}
//                       {selectedType === "school" && (
//                         <div className="grid md:grid-cols-2 gap-6">
//                           <div>
//                             <label className="block text-sm font-medium mb-2 text-foreground">
//                               Approximate Audience Size
//                             </label>
//                             <input
//                               type="text"
//                               name="audienceSize"
//                               value={formData.audienceSize}
//                               onChange={handleInputChange}
//                               placeholder="e.g. 100 Students, Grade 9-12"
//                               className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-sm font-medium mb-2 text-foreground">
//                               Preferred Date / Timeframe
//                             </label>
//                             <div className="relative">
//                               <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
//                               <input
//                                 type="text"
//                                 name="preferredDates"
//                                 value={formData.preferredDates}
//                                 onChange={handleInputChange}
//                                 placeholder="e.g. Mid-October, Morning Session"
//                                 className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       )}

//                       {/* HEALTHCARE PROFESSIONAL */}
//                       {selectedType === "healthcare" && (
//                         <div className="grid md:grid-cols-2 gap-6">
//                           <div>
//                             <label className="block text-sm font-medium mb-2 text-foreground">
//                               Medical Speciality
//                             </label>
//                             <input
//                               type="text"
//                               name="medicalSpecialty"
//                               value={formData.medicalSpecialty}
//                               onChange={handleInputChange}
//                               placeholder="e.g. Surgical Oncology, General Physician, Gynecologist"
//                               className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-sm font-medium mb-2 text-foreground">
//                               Interested Collaboration Form
//                             </label>
//                             <select
//                               name="collabInterests"
//                               value={formData.collabInterests}
//                               onChange={handleInputChange}
//                               className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
//                             >
//                               <option value="">Select interest...</option>
//                               <option value="Podcast & Educational Videos">Podcast & Educational Videos</option>
//                               <option value="Screening Camps & Medical Guidance">Screening Camps & Medical Guidance</option>
//                               <option value="Awareness Workshops">Awareness Workshops</option>
//                               <option value="Educational Content Review">Educational Content Review</option>
//                             </select>
//                           </div>
//                         </div>
//                       )}

//                       {/* GENERAL MESSAGE BOX */}
//                       <div className="mt-6">
//                         <label className="block text-sm font-medium mb-2 text-foreground">
//                           Additional Message / Details
//                         </label>
//                         <textarea
//                           name="message"
//                           rows={4}
//                           value={formData.message}
//                           onChange={handleInputChange}
//                           placeholder="Tell us a little more about your inquiry or proposal..."
//                           className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none"
//                         />
//                       </div>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="pt-4">
//                       <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="w-full py-4 bg-primary text-white rounded-full font-bold text-lg hover:scale-[1.01] transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
//                       >
//                         {isSubmitting ? (
//                           <>
//                             <Loader2 className="w-5 h-5 animate-spin" />
//                             Sending Request...
//                           </>
//                         ) : (
//                           <>
//                             <Send className="w-5 h-5" />
//                             Submit Enquiry
//                           </>
//                         )}
//                       </button>
//                     </div>
//                   </motion.form>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </section>
//       </main>

//       <CTA />
//       <Footer />
//     </div>
//   );
// }

"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Heart,
  Handshake,
  Users,
  Mic,
  GraduationCap,
  Stethoscope,
  Newspaper,
  MessageSquare,
  CheckCircle2,
  Send,
  Loader2,
  Building2,
  Globe,
  MapPin,
  Mail,
  Phone,
  User,
  Calendar,
  Sparkles,
} from "lucide-react";

const ENQUIRY_TYPES = [
  {
    id: "volunteer",
    label: "Volunteer",
    icon: Users,
    description: "Join our core team and make an impact on the ground.",
  },
  {
    id: "donation",
    label: "Donation / Support",
    icon: Heart,
    description: "Support our cancer awareness and screening initiatives.",
  },
  {
    id: "partnership",
    label: "Become a Partner",
    icon: Handshake,
    description: "Collaborate with us as an NGO, company, or institution.",
  },
  {
    id: "podcast",
    label: "Feature on Podcast",
    icon: Mic,
    description: "Share your story, expert insight, or advocate's journey.",
  },
  {
    id: "school",
    label: "School Session",
    icon: GraduationCap,
    description: "Invite Pink for Purpose for an awareness workshop.",
  },
  {
    id: "healthcare",
    label: "Healthcare Collab",
    icon: Stethoscope,
    description: "Join as a medical expert, doctor, or health provider.",
  },
  {
    id: "media",
    label: "Media / Press",
    icon: Newspaper,
    description: "Press coverage, interviews, or publication inquiries.",
  },
  {
    id: "general",
    label: "General Enquiry",
    icon: MessageSquare,
    description: "Have a general question or message for our team?",
  },
];

export default function GetInvolvedPage() {
  const searchParams = useSearchParams();
  const [selectedType, setSelectedType] = useState("volunteer");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const typeParam = searchParams.get("type");
    if (typeParam && ENQUIRY_TYPES.some((t) => t.id === typeParam)) {
      setSelectedType(typeParam);
    }
  }, [searchParams]);

  const activeCategory = ENQUIRY_TYPES.find((t) => t.id === selectedType);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    // 1. Attach Web3Forms Access Key
    formData.append("access_key", "ed2dcd2c-500a-496a-9c75-f472ea22de61");

    // 2. Format custom subject line: [Category] Name - Organisation
    const fullName = formData.get("fullName") || "";
    const organisation = formData.get("organisation") || "";
    const categoryLabel = activeCategory?.label || selectedType;

    const emailSubject = `[${categoryLabel}] ${fullName}${
      organisation ? ` - ${organisation}` : ""
    }`;

    formData.append("subject", emailSubject);
    formData.append("from_name", "Pink for Purpose Website");
    formData.append("enquiry_category", categoryLabel);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        event.target.reset();
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      setIsSubmitting(false);
      alert("Something went wrong while sending your request. Please try again.");
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 via-secondary/10 to-background overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>JOIN OUR MISSION</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
            >
              Get Involved with <br />
              <span className="text-primary">Pink for Purpose.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Whether you wish to support our cause, partner with us, host a workshop, or volunteer, we'd love to collaborate with you.
            </motion.p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Category Selector Buttons */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-3 text-center">
                How would you like to get involved?
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Select an option below so we can tailor the details for you.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {ENQUIRY_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setSelectedType(type.id);
                        setIsSubmitted(false);
                      }}
                      className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 flex flex-col justify-between h-32 cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/5 text-primary shadow-md scale-[1.02]"
                          : "border-gray-100 bg-gray-50/50 hover:bg-gray-100/80 text-foreground hover:border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isSelected
                              ? "bg-primary text-white"
                              : "bg-white text-muted-foreground border border-gray-100"
                          }`}
                        >
                          <Icon size={20} />
                        </div>
                        {isSelected && (
                          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                        )}
                      </div>
                      <span className="font-bold text-sm sm:text-base leading-tight">
                        {type.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form Box */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl p-8 md:p-12 relative overflow-hidden">
              {activeCategory && (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                    <activeCategory.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-snug">
                      {activeCategory.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {activeCategory.description}
                    </p>
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-bold">Thank You for Reaching Out!</h3>
                    <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
                      We have received your enquiry regarding <strong>{activeCategory?.label}</strong>. Our team will review your message and reach out to you as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20 cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={onSubmit}
                    className="space-y-8"
                  >
                    {/* SECTION 1: Standard Fields */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
                        1. Basic Contact Information
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <input
                              type="text"
                              name="fullName"
                              required
                              placeholder="Jane Doe"
                              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">
                            Email Address <span className="text-primary">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <input
                              type="email"
                              name="email"
                              required
                              placeholder="jane@example.com"
                              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">
                            Phone Number <span className="text-xs text-muted-foreground">(Optional)</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <input
                              type="tel"
                              name="phone"
                              placeholder="+1 (555) 000-0000"
                              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">
                            Organisation / School <span className="text-xs text-muted-foreground">(Optional)</span>
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <input
                              type="text"
                              name="organisation"
                              placeholder="Company, Hospital, or School name"
                              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">
                            City <span className="text-primary">*</span>
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <input
                              type="text"
                              name="city"
                              required
                              placeholder="New York, London, Delhi..."
                              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">
                            Country <span className="text-primary">*</span>
                          </label>
                          <div className="relative">
                            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <input
                              type="text"
                              name="country"
                              required
                              placeholder="Country"
                              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 2: Dynamic Category Specific Fields */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
                        2. Enquiry Specific Details
                      </h4>

                      {/* DONATION */}
                      {selectedType === "donation" && (
                        <div className="space-y-4">
                          <label className="block text-sm font-medium text-foreground">
                            How would you like to support our mission?
                          </label>
                          <select
                            name="donationSupportType"
                            className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
                          >
                            <option value="">Select support type...</option>
                            <option value="Direct Financial Contribution">Direct Financial Support / Sponsorship</option>
                            <option value="Sponsoring Screening Camps">Sponsoring Screening Camps & Equipment</option>
                            <option value="In-Kind Support / Resources">In-Kind Resource / Educational Kit Support</option>
                            <option value="Corporate CSR Partnership">Corporate CSR Support</option>
                          </select>
                        </div>
                      )}

                      {/* PARTNERSHIP */}
                      {selectedType === "partnership" && (
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-2 text-foreground">
                              Organisation Type
                            </label>
                            <select
                              name="orgType"
                              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
                            >
                              <option value="">Select type...</option>
                              <option value="NGO / Non-Profit">NGO / Non-Profit</option>
                              <option value="Hospital / Healthcare Institution">Hospital / Healthcare Institution</option>
                              <option value="School / Educational Institution">School / Educational Institution</option>
                              <option value="Corporate / Enterprise">Corporate / Enterprise</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-foreground">
                              Website <span className="text-xs text-muted-foreground">(Optional)</span>
                            </label>
                            <input
                              type="url"
                              name="orgWebsite"
                              placeholder="https://example.org"
                              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                          </div>
                        </div>
                      )}

                      {/* PODCAST */}
                      {selectedType === "podcast" && (
                        <div className="space-y-4">
                          <label className="block text-sm font-medium text-foreground">
                            Your Designation / Role
                          </label>
                          <input
                            type="text"
                            name="podcastRole"
                            placeholder="e.g. Oncologist, Survivor Advocate, Health Researcher"
                            className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />
                        </div>
                      )}

                      {/* VOLUNTEER */}
                      {selectedType === "volunteer" && (
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-2 text-foreground">
                              Areas You Can Help With
                            </label>
                            <input
                              type="text"
                              name="volunteerAreas"
                              placeholder="e.g. Community Outreach, Content Creation, Event Hosting"
                              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-foreground">
                              Weekly Availability
                            </label>
                            <select
                              name="volunteerAvailability"
                              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
                            >
                              <option value="">Select availability...</option>
                              <option value="1-3 hours / week">1–3 hours / week</option>
                              <option value="3-5 hours / week">3–5 hours / week</option>
                              <option value="5+ hours / week">5+ hours / week</option>
                              <option value="Event-based only">Event-based only</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {/* SCHOOL SESSION */}
                      {selectedType === "school" && (
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-2 text-foreground">
                              Approximate Audience Size
                            </label>
                            <input
                              type="text"
                              name="audienceSize"
                              placeholder="e.g. 100 Students, Grade 9-12"
                              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-foreground">
                              Preferred Date / Timeframe
                            </label>
                            <div className="relative">
                              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                              <input
                                type="text"
                                name="preferredDates"
                                placeholder="e.g. Mid-October, Morning Session"
                                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* HEALTHCARE PROFESSIONAL */}
                      {selectedType === "healthcare" && (
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-2 text-foreground">
                              Medical Speciality
                            </label>
                            <input
                              type="text"
                              name="medicalSpecialty"
                              placeholder="e.g. Surgical Oncology, General Physician, Gynecologist"
                              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2 text-foreground">
                              Interested Collaboration Form
                            </label>
                            <select
                              name="collabInterests"
                              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white"
                            >
                              <option value="">Select interest...</option>
                              <option value="Podcast & Educational Videos">Podcast & Educational Videos</option>
                              <option value="Screening Camps & Medical Guidance">Screening Camps & Medical Guidance</option>
                              <option value="Awareness Workshops">Awareness Workshops</option>
                              <option value="Educational Content Review">Educational Content Review</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {/* MESSAGE TEXTAREA */}
                      <div className="mt-6">
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          Additional Message / Details
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Tell us a little more about your inquiry or proposal..."
                          className="w-full p-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-primary text-white rounded-full font-bold text-lg hover:scale-[1.01] transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending Request...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Submit Enquiry
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}