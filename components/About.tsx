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
              서비스 기획자이자 콘텐츠 운영자, 글 쓰는 PM입니다.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              기업 교육 플랫폼, 문화재단, 스타트업까지 — 다양한 조직에서
              기획부터 운영, 데이터 분석, 글쓰기까지 직접 해왔습니다.
              <br /><br />
              단순히 일을 많이 한 게 아닙니다.
              <strong className="text-[#1C1C1C]"> 처음부터 끝까지 혼자 만들어냈습니다.</strong>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "7+", label: "프로젝트" },
                { value: "3+", label: "조직 경험" },
                { value: "20%↑", label: "취업률 향상" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white border border-[#D8CEB8] rounded-xl p-4 text-center">
                  <div className="text-2xl font-black text-[#4A7C59]">{value}</div>
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
