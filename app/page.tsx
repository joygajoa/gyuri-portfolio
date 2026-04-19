"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";
import InquiryModal from "@/components/InquiryModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onInquiryClick={() => setIsModalOpen(true)} />
      <main>
        <Hero onInquiryClick={() => setIsModalOpen(true)} />
        <About />
        <Capabilities />
        <Projects />
        <Process />
        <CTASection onInquiryClick={() => setIsModalOpen(true)} />
      </main>
      <Footer onInquiryClick={() => setIsModalOpen(true)} />
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
