"use client";

import { useState, useEffect } from "react";

interface NavbarProps {
  onInquiryClick: () => void;
}

export default function Navbar({ onInquiryClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E5E8EB]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="font-bold text-[#191F28] text-lg tracking-tight hover:opacity-70 transition-opacity"
        >
          이규리
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8B95A1]">
          <a href="#about" className="hover:text-[#191F28] transition-colors">소개</a>
          <a href="#capabilities" className="hover:text-[#191F28] transition-colors">역량</a>
          <a href="#projects" className="hover:text-[#191F28] transition-colors">프로젝트</a>
          <a href="#process" className="hover:text-[#191F28] transition-colors">작업방식</a>
        </div>
        <button
          onClick={onInquiryClick}
          className="bg-[#3182F6] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#1B64DA] transition-colors duration-200"
        >
          의뢰하기
        </button>
      </div>
    </nav>
  );
}
