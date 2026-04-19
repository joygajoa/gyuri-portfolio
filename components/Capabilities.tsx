import { capabilities } from "@/data/projects";

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#4A7C59] uppercase tracking-widest mb-3">
            Capabilities
          </p>
          <h2 className="text-4xl font-black text-[#1C1C1C] mb-4">무엇을 할 수 있나요</h2>
          <p className="text-[#6B6B6B] text-lg">
            여러 분야를 넘나들며 쌓은 실행력. 한 가지만 잘하는 사람이 아닙니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="bg-[#F5F1E8] border border-[#D8CEB8] rounded-2xl p-6 hover:border-[#4A7C59] hover:shadow-md transition-all duration-200 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{cap.icon}</div>
              <h3 className="text-lg font-bold text-[#1C1C1C] mb-2 group-hover:text-[#4A7C59] transition-colors">
                {cap.title}
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
