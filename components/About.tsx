import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F7F8FA]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden border border-[#E5E8EB] shadow-md">
                <Image
                  src="/profile.jpg"
                  alt="이규리 프로필 사진"
                  fill
                  className="object-cover object-top"
                  sizes="256px"
                  priority
                />
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#3182F6] rounded-full" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-[#1B64DA] rounded-full opacity-60" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-sm font-medium text-[#3182F6] uppercase tracking-widest mb-3">
              About
            </p>
            <h2 className="text-4xl font-black text-[#191F28] mb-6 leading-tight">
              이규리<br />
              <span className="text-2xl font-medium text-[#8B95A1]">Gyu Ri Lee</span>
            </h2>
            <p className="text-[#8B95A1] text-lg leading-relaxed mb-6">
              문화예술 기획자에서 PM으로, 지금은 프리랜서로 일해요.
            </p>
            <p className="text-[#4E5968] leading-relaxed mb-8">
              계원예술대학교 순수미술 전공 후 문화재단에서 기획을 배웠고,
              스타트업에서 PM이 됐어요.
              <br /><br />
              도봉문화재단, 주렁주렁, 내러티브(코드스테이츠), 인천서구문화재단, 휴넷.
              <strong className="text-[#191F28]"> 5개 조직, 경력 3년 11개월.</strong>
              <br />
              매번 처음인 일을 맡아 해냈어요.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "3년 11개월", label: "총 경력" },
                { value: "533명", label: "프로그램 모집" },
                { value: "5개", label: "조직 경험" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white border border-[#E5E8EB] rounded-xl p-4 text-center">
                  <div className="text-xl font-black text-[#3182F6]">{value}</div>
                  <div className="text-xs text-[#8B95A1] mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
