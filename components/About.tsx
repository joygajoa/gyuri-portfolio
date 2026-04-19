export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F5F1E8]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile image placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-[#4A7C59]/20 to-[#2D5016]/10 flex items-center justify-center border-2 border-[#4A7C59]/20">
                <div className="text-center">
                  <div className="text-6xl mb-2">🌿</div>
                  <p className="text-sm text-[#6B6B6B]">프로필 사진</p>
                  <p className="text-xs text-[#6B6B6B]">(추후 추가 예정)</p>
                </div>
              </div>
              {/* Decorative dot */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#4A7C59] rounded-full" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-[#2D5016] rounded-full opacity-60" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-sm font-medium text-[#4A7C59] uppercase tracking-widest mb-3">
              About
            </p>
            <h2 className="text-4xl font-black text-[#1C1C1C] mb-6 leading-tight">
              이규리<br />
              <span className="text-2xl font-medium text-[#6B6B6B]">Gyu Ri Lee</span>
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
              문화예술 기획자에서 PM으로, 지금은 프리랜서로 일합니다.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              계원예술대학교에서 순수미술을 전공했습니다.
              그러다 문화재단에서 기획을 배웠고, 스타트업에서 PM이 됐습니다.
              <br /><br />
              도봉문화재단, 주렁주렁, 내러티브(코드스테이츠), 인천서구문화재단, 휴넷.
              <strong className="text-[#1C1C1C]"> 5개 조직에서 경력 3년 11개월,</strong> 매번 처음인 일을 맡아 해냈습니다.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "3년 11개월", label: "총 경력" },
                { value: "533명", label: "프로그램 모집" },
                { value: "5개", label: "조직 경험" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white border border-[#D8CEB8] rounded-xl p-4 text-center">
                  <div className="text-xl font-black text-[#4A7C59]">{value}</div>
                  <div className="text-xs text-[#6B6B6B] mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
