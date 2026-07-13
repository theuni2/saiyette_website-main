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
  title: "Pink For Purpose",
  description: "Pink For Purpose NGO Website",
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
      <body className="min-h-full flex flex-col">
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}
