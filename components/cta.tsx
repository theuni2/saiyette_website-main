"use client";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

const CTA = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden bg-white/60 backdrop-blur-md rounded-[2rem] sm:grid sm:grid-cols-2 sm:items-center border border-primary/10 shadow-sm">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center sm:text-left">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl tracking-tight">
                Help Us <span className="text-primary"> Unlock Hope</span> for
                Everyone
              </h2>

              <p className="hidden text-gray-500 md:mt-6 md:block text-lg leading-relaxed">
                Every contribution brings us one step closer to a world where no
                one fights cancer alone. Join our community-driven movement and
                help us spread awareness and support today.
              </p>

              <div className="mt-8 flex justify-center sm:justify-start">
                <Link
                  href="/form"
                  className="w-fit flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-101 hover:bg-primary duration-300 shadow-lg shadow-black/10"
                >
                  <span>Get Involved</span>
                  <ArrowUpRightIcon size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-64 w-full sm:h-full">
            <img
              alt="Saiyette Awareness"
              src="./gallery/2.jpeg"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/5" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
