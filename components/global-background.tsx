"use client";
import { usePathname } from "next/navigation";
import { Ribbon, Heart, Footprints, Sparkles, Flower, Stethoscope, HandHeart, ShieldCheck, Gem, Activity } from "lucide-react";
import { FloatingIcon } from "./ui/floating-icon";

export const GlobalBackground = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Global Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(var(--primary) 1.5px, transparent 1.5px)`,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Global Floating Icons - Hidden on home page */}
      {!isHomePage && (
        <div className="absolute inset-0 z-0">
          {/* Row 1 */}
          <FloatingIcon Icon={Ribbon} delay={0} x="5%" y="15%" size={44} />
          <FloatingIcon Icon={Heart} delay={2} x="90%" y="10%" size={32} />
          <FloatingIcon Icon={Stethoscope} delay={1} x="45%" y="8%" size={38} />
          
          {/* Row 2 */}
          <FloatingIcon Icon={Flower} delay={0.5} x="25%" y="35%" size={34} />
          <FloatingIcon Icon={Gem} delay={3} x="75%" y="25%" size={28} />
          <FloatingIcon Icon={Ribbon} delay={1.5} x="12%" y="55%" size={36} />
          
          {/* Row 3 */}
          <FloatingIcon Icon={HandHeart} delay={2.5} x="60%" y="45%" size={42} />
          <FloatingIcon Icon={ShieldCheck} delay={4} x="85%" y="60%" size={34} />
          <FloatingIcon Icon={Footprints} delay={0.8} x="35%" y="65%" size={36} />
          
          {/* Row 4 */}
          <FloatingIcon Icon={Sparkles} delay={1.2} x="15%" y="85%" size={32} />
          <FloatingIcon Icon={Activity} delay={3.5} x="55%" y="75%" size={30} />
          <FloatingIcon Icon={Heart} delay={2.2} x="78%" y="90%" size={40} />
          
          {/* Extra Density */}
          <FloatingIcon Icon={Sparkles} delay={4.5} x="48%" y="52%" size={24} />
          <FloatingIcon Icon={Flower} delay={2.8} x="92%" y="40%" size={30} />
          <FloatingIcon Icon={HandHeart} delay={1.7} x="5%" y="30%" size={34} />
        </div>
      )}

      {/* Large Abstract Shapes for Depth */}
      <div className="absolute top-[-10%] right-[-5%] w-160 h-160 rounded-full border-80 border-primary/2" />
      <div className="absolute bottom-[-10%] left-[-10%] w-200 h-200 rounded-full border-100 border-primary/2" />
      
      {/* Subtle Background Blobs */}
      <div className="absolute top-1/4 left-[-5%] w-[600px] h-[600px] bg-primary/2 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-[-5%] w-[500px] h-[500px] bg-primary/1 rounded-full blur-[100px]" />
    </div>
  );
};
