"use client";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { CaretUpIcon } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-none">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute inset-e-4 top-4 sm:inset-e-6 sm:top-6 lg:inset-e-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-primary p-2 text-white shadow-sm transition hover:bg-primary/80 sm:p-3 lg:p-4"
            href="#"
          >
            <CaretUpIcon />
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center items-center text-teal-600 lg:justify-start">
              <Link href="/" className="flex items-center">
                <img
                  src="/img/pfplogo.png"
                  alt="Saiyette Logo"
                  className="w-16 animate-in fade-in duration-1000"
                />
                <h1 className="text-2xl font-medium text-primary tracking-tight">
                  Pink For Purpose
                </h1>
              </Link>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Together, We Fight Cancer One Step at a Time. Empowering women
              through awareness, support, and early detection.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-gray-700 transition hover:text-primary font-medium"
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
