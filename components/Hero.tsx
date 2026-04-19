"use client";

interface HeroProps {
  onInquiryClick: () => void;
}

export default function Hero({ onInquiryClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white"
    >
      {/* Decorative background */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #3182F6 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #1B64DA 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
      />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#EBF0FF] text-[#3182F6] text-sm font-medium px-4 py-1.5 rounded-full mb-8 animate-fade-in-up">
            <span className="w-1.5 h-1.5 bg-[#3182F6] rounded-full animate-pulse" />
            지금 의뢰 받고 있어요
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl font-black text-[#191F28] leading-tight mb-6 animate-fade-in-up delay-100">
            매번 처음인 일을
            <br />
            <span className="text-[#3182F6]">해왔고, 해냈습니다.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-[#8B95A1] leading-relaxed mb-4 animate-fade-in-up delay-200">
            533명 모집, 5천만 원 수주, 행사 안전사고 0건.
          </p>
          <p className="text-lg text-[#8B95A1] leading-relaxed mb-10 animate-fade-in-up delay-300">
            문화재단·전통시장·스타트업·e러닝 플랫폼—
            <br />
            어디서든 기획하고, 운영하고, 증명했어요.
          </p>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-2 mb-12 animate-fade-in-up delay-400">
            {["서비스 기획", "UX 리서치", "이벤트 기획", "교육 운영", "카피라이팅", "커뮤니티 운영"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-[#F7F8FA] border border-[#E5E8EB] text-[#4E5968] text-sm px-3 py-1 rounded-full"
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
              className="bg-[#3182F6] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#1B64DA] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 transform"
            >
              지금 의뢰하기 →
            </button>
            <a
              href="#projects"
              className="border-2 border-[#E5E8EB] text-[#4E5968] font-bold text-lg px-8 py-4 rounded-full hover:border-[#3182F6] hover:text-[#3182F6] transition-all duration-200 text-center"
            >
              작업물 보기
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
        <span className="text-xs text-[#8B95A1]">스크롤</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#3182F6] to-transparent" />
      </div>
    </section>
  );
}
