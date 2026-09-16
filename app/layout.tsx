import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GlobalBackground } from "@/components/global-background";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pink For Purpose | Founded by Saiyette Aima | Breast Cancer AI & Awareness",
  description:
    "Pink For Purpose is a global breast cancer awareness movement founded by Dubai teenager Saiyette Aima. Providing early detection guidance, AI-driven Care Check self-exams, and compassionate support across the UAE, India, Saudi Arabia, and globally.",
  keywords: [
    "Saiyette Aima",
    "Saiyette Aima Founder",
    "Pink For Purpose",
    "Care Check App",
    "Dubai Teen Founder Saiyette Aima",
    "Breast Cancer Awareness",
    "AI Breast Health Platform",
    "Cancer Early Detection",
  ],
  authors: [{ name: "Saiyette Aima" }],
  creator: "Saiyette Aima",
  publisher: "Pink For Purpose",
  openGraph: {
    title: "Pink For Purpose | Founded by Saiyette Aima",
    description:
      "Global breast cancer awareness initiative and AI Care Check platform founded by Dubai teenager Saiyette Aima.",
    siteName: "Pink For Purpose",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://pinkforpurpose.org/#saiyette-aima",
      name: "Saiyette Aima",
      jobTitle: "Founder & Creator",
      worksFor: {
        "@type": "Organization",
        name: "Pink For Purpose",
      },
      description:
        "Dubai teenager, founder of Pink For Purpose, and creator of Care Check AI platform for breast health awareness and early detection.",
      knowsAbout: [
        "Breast Cancer Awareness",
        "AI Healthcare Platforms",
        "Early Cancer Detection",
        "Youth Advocacy",
      ],
    },
    {
      "@type": "Organization",
      name: "Pink For Purpose",
      founder: {
        "@type": "Person",
        name: "Saiyette Aima",
      },
      description:
        "Global breast cancer awareness movement providing early detection guidance, AI Care Check self-examination tools, and patient advocacy.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        bricolageGrotesque.variable,
        "font-sans",
      )}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}
