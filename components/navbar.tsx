"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { NAV_LINKS } from "@/lib/constants";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 pointer-events-none flex justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "pointer-events-auto flex h-16 items-center justify-between transition-colors duration-300",
          isScrolled
            ? "w-[90%] md:w-fit max-w-[1000px] rounded-[100px] bg-white/80 px-4 shadow-lg border border-black/5"
            : "w-full max-w-[1440px] rounded-none bg-transparent px-4 border border-transparent shadow-none",
        )}
      >
        <div className="flex items-center min-w-max">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.img
              src="/img/pfplogo.png"
              alt="Saiyette Logo"
              width={80}
              className="animate-in fade-in"
            />
            <AnimatePresence mode="wait">
              <motion.h1
                key={isScrolled ? "scrolled" : "top"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-2xl font-semibold text-primary tracking-tight"
              >
                Pink For Purpose
              </motion.h1>
            </AnimatePresence>
          </Link>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <nav className="hidden md:block mx-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm transition-colors duration-300 font-medium whitespace-nowrap",
                        isActive
                          ? "text-primary"
                          : "text-black hover:text-primary",
                      )}
                    >
                      {link.name}
                    </Link>
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4 min-w-max">
          <div className="hidden sm:flex">
            {!isScrolled ? (
              <Link
                href="/our-story"
                className="flex items-center gap-1 rounded-full bg-none px-6 py-3 text-sm font-medium text-black transition-all hover:scale-101 hover:bg-primary hover:text-white hover:border-primary border border-black"
              >
                <p>Get Involved</p>
                <ArrowUpRightIcon />
              </Link>
            ) : null}
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-transparent"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] border-l-0 bg-white/95 backdrop-blur-xl p-0"
              >
                <div className="flex flex-col h-full">
                  <div className="p-8 border-b">
                    <SheetHeader className="flex flex-col items-start gap-1">
                      <img
                        src="/img/pfplogo.png"
                        alt="Logo"
                        width={60}
                        height={60}
                        className="rounded-xl"
                      />
                      <SheetTitle className="text-left font-bold text-2xl text-primary tracking-tight leading-tight">
                        Pink For Purpose
                      </SheetTitle>
                    </SheetHeader>
                  </div>

                  <div className="flex-1 overflow-y-auto py-8 px-8">
                    <nav className="flex flex-col gap-6">
                      <AnimatePresence>
                        {NAV_LINKS.map((link, index) => (
                          <motion.div
                            key={link.href}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "group relative flex items-center justify-between py-2 text-xl font-semibold transition-all",
                                pathname === link.href
                                  ? "text-primary"
                                  : "text-slate-600 hover:text-primary",
                              )}
                            >
                              <span>{link.name}</span>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{
                                  opacity: pathname === link.href ? 1 : 0,
                                }}
                                className="w-2 h-2 rounded-full bg-primary"
                              />
                            </Link>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </nav>
                  </div>

                  <div className="p-8 border-t bg-slate-50/50">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Button
                        asChild
                        className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-lg font-bold shadow-lg"
                      >
                        <Link
                          href="/get-involved"
                          onClick={() => setIsOpen(false)}
                        >
                          Get Involved
                        </Link>
                      </Button>
                      <p className="mt-6 text-center text-sm text-slate-400">
                        © 2026 Pink For Purpose
                      </p>
                    </motion.div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
