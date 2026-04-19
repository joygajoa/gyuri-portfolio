import { capabilities } from "@/data/projects";

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#3182F6] uppercase tracking-widest mb-3">
            Capabilities
          </p>
          <h2 className="text-4xl font-black text-[#191F28] mb-4">이런 일을 합니다</h2>
          <p className="text-[#8B95A1] text-lg">
            기획·운영·분석·글쓰기. 분야를 가리지 않아요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="bg-[#F7F8FA] border border-[#E5E8EB] rounded-2xl p-6 hover:border-[#3182F6] hover:shadow-md transition-all duration-200 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{cap.icon}</div>
              <h3 className="text-lg font-bold text-[#191F28] mb-2 group-hover:text-[#3182F6] transition-colors">
                {cap.title}
              </h3>
              <p className="text-[#8B95A1] text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
