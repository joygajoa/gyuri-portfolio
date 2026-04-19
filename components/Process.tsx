import { processSteps } from "@/data/projects";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#4A7C59] uppercase tracking-widest mb-3">
            How I Work
          </p>
          <h2 className="text-4xl font-black text-[#1C1C1C] mb-4">작업 방식</h2>
          <p className="text-[#6B6B6B] text-lg">
            시작부터 끝까지, 제가 어떻게 일하는지 보여드립니다.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4A7C59]/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative flex flex-col items-center md:items-start text-center md:text-left">
                {/* Step number circle */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#4A7C59]/10 to-[#2D5016]/5 border border-[#4A7C59]/20 flex flex-col items-center justify-center mb-5">
                  <span className="text-3xl">{step.icon}</span>
                  <span className="text-xs font-bold text-[#4A7C59] mt-1">{step.step}</span>
                </div>

                <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">{step.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{step.description}</p>

                {/* Arrow between steps (mobile) */}
                {i < processSteps.length - 1 && (
                  <div className="md:hidden flex justify-center w-full my-2 text-[#4A7C59] text-xl">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-20 bg-gradient-to-br from-[#4A7C59]/10 to-[#2D5016]/5 border border-[#4A7C59]/20 rounded-2xl p-8 text-center">
          <p className="text-2xl font-black text-[#1C1C1C] mb-3">
            &ldquo;기획만 하는 사람이 아닙니다.&rdquo;
          </p>
          <p className="text-[#6B6B6B] leading-relaxed max-w-xl mx-auto">
            해커톤 기획서를 쓰고 직접 행사를 진행했습니다.
            수료생 프로그램을 기획하고 취업률을 20% 올렸습니다.
            분석하고 쓰고 운영하고 결과를 냈습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
