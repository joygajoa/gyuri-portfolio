interface CTASectionProps {
  onInquiryClick: () => void;
}

export default function CTASection({ onInquiryClick }: CTASectionProps) {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2D5016 0%, #4A7C59 60%, #7FB08A 100%)" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #F5F1E8 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-10 w-48 h-48 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #F5F1E8 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <p className="text-[#7FB08A] text-sm font-medium uppercase tracking-widest mb-6">
          함께 만들어가요
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          함께 만들어갈
          <br />
          준비가 되어 있습니다
        </h2>
        <p className="text-[#C8E6D0] text-xl mb-4 max-w-xl mx-auto leading-relaxed">
          작은 프로젝트도, 큰 기획도 환영합니다.
        </p>
        <p className="text-[#A8CEB5] text-lg mb-12 max-w-xl mx-auto">
          먼저 어떤 일인지 알려주세요.
        </p>

        <button
          onClick={onInquiryClick}
          className="bg-[#F5F1E8] text-[#2D5016] font-black text-xl px-12 py-5 rounded-full hover:bg-white transition-all duration-200 hover:shadow-xl hover:-translate-y-1 transform"
        >
          의뢰서 작성하기 →
        </button>

        <p className="text-[#A8CEB5] text-sm mt-6">
          빠르면 24시간 내 답장드립니다
        </p>
      </div>
    </section>
  );
}
