interface CTASectionProps {
  onInquiryClick: () => void;
}

export default function CTASection({ onInquiryClick }: CTASectionProps) {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D1F4E 0%, #1B64DA 60%, #3182F6 100%)" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #FFFFFF 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-10 w-48 h-48 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #FFFFFF 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <p className="text-[#93BBFD] text-sm font-medium uppercase tracking-widest mb-6">
          함께 만들어가요
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          어떤 일이든
          <br />
          먼저 알려주세요
        </h2>
        <p className="text-[#BDD4FE] text-xl mb-4 max-w-xl mx-auto leading-relaxed">
          작은 의뢰도 환영해요.
        </p>
        <p className="text-[#93BBFD] text-lg mb-12 max-w-xl mx-auto">
          어떤 프로젝트인지 알려주시면 바로 검토할게요.
        </p>

        <button
          onClick={onInquiryClick}
          className="bg-white text-[#1B64DA] font-black text-xl px-12 py-5 rounded-full hover:bg-[#F0F5FF] transition-all duration-200 hover:shadow-xl hover:-translate-y-1 transform"
        >
          의뢰서 작성하기 →
        </button>

        <p className="text-[#93BBFD] text-sm mt-6">
          빠르면 24시간 내 답장드려요
        </p>
      </div>
    </section>
  );
}
