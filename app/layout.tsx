import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL(
  //   "https://developer-portfolio-ibrahim-memons-projects.vercel.app"
  // ),
  title: "Usama's Portfolio",
  description: "Developer Portfolio By Usama Rasheed",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Usama Rasheed","MERN Stack Developer","Software Engineer","Usama","Usama dev"],
  openGraph: {
    title: "Usama Rasheed",
    description: "MERN Stack Developer/Software Engineer",
    images: "/OpenGraph.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
