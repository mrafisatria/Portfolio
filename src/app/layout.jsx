"use client"; // wajib supaya bisa pakai useEffect

import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect, useRef } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// export const metadata = {
//   title: "Muhammad Rafi Satria - Fullstack Web Developer🚀",
// };

export default function RootLayout({ children }) {

  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const glowSize = 900; // ukuran lingkaran

  useEffect(() => {
    const handleMouseMove = (e) => {
      target.current.x = e.clientX - glowSize / 2; // setengah ukuran
      target.current.y = e.clientY - glowSize / 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.2;
      pos.current.y += (target.current.y - pos.current.y) * 0.2;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);



  return (
    <html lang="en">
      <head>
        <title>Muhammad Rafi Satria</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} antialiased bg-slate-950 relative min-h-screen overflow-x-hidden`}>
        <div ref={glowRef} className="pointer-events-none fixed w-[1100px] h-[1100px] rounded-full blur-[150px]" style={{background: `radial-gradient(circle, 
              rgba(0,255,255,0.15) 0%, 
              rgba(0,255,255,0.1) 20%, 
              rgba(0,255,255,0.05) 50%, 
              rgba(0,255,255,0.01) 80%, 
              rgba(0,255,255,0) 100%)`,}}></div>
        {children}
      </body>
    </html>
  );
}


