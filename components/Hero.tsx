"use client";

interface HeroProps {
  onInquiryClick: () => void;
}

export default function Hero({ onInquiryClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F5F1E8 0%, #E8F0E5 50%, #F5F1E8 100%)" }}
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #4A7C59 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-20 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2D5016 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#4A7C59]/10 border border-[#4A7C59]/20 text-[#4A7C59] text-sm font-medium px-4 py-1.5 rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-[#4A7C59] rounded-full animate-pulse" />
            프리랜서 의뢰 받고 있습니다
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl font-black text-[#1C1C1C] leading-tight mb-6 animate-fade-in-up delay-100">
            매번 처음인 일을
            <br />
            <span className="text-[#4A7C59]">해왔고, 해냈습니다.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-[#6B6B6B] leading-relaxed mb-4 animate-fade-in-up delay-200">
            533명 모집, 5천만 원 사업 수주, 행사 안전사고 0건.
          </p>
          <p className="text-lg text-[#6B6B6B] leading-relaxed mb-10 animate-fade-in-up delay-300">
            문화재단, 전통시장, 스타트업 PM, e러닝 플랫폼—
            <br />
            경계 없이 기획하고, 운영하고, 증명했습니다.
          </p>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-2 mb-12 animate-fade-in-up delay-400">
            {["서비스 기획", "UX 리서치", "이벤트 기획", "교육 운영", "카피라이팅", "커뮤니티 운영"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-white border border-[#D8CEB8] text-[#1C1C1C] text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
            <button
              onClick={onInquiryClick}
              className="bg-[#4A7C59] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#2D5016] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 transform"
            >
              지금 의뢰하기 →
            </button>
            <a
              href="#projects"
              className="border-2 border-[#4A7C59] text-[#4A7C59] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#4A7C59]/5 transition-all duration-200 text-center"
            >
              작업물 보기
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
        <span className="text-xs text-[#6B6B6B]">스크롤</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#4A7C59] to-transparent" />
      </div>
    </section>
  );
}
