import { processSteps } from "@/data/projects";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#3182F6] uppercase tracking-widest mb-3">
            How I Work
          </p>
          <h2 className="text-4xl font-black text-[#191F28] mb-4">이렇게 일해요</h2>
          <p className="text-[#8B95A1] text-lg">
            문제 발견부터 성과 측정까지, 직접 해요.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3182F6]/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative flex flex-col items-center md:items-start text-center md:text-left">
                {/* Step number circle */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-[#EBF0FF] border border-[#3182F6]/20 flex flex-col items-center justify-center mb-5">
                  <span className="text-3xl">{step.icon}</span>
                  <span className="text-xs font-bold text-[#3182F6] mt-1">{step.step}</span>
                </div>

                <h3 className="text-lg font-bold text-[#191F28] mb-2">{step.title}</h3>
                <p className="text-[#8B95A1] text-sm leading-relaxed">{step.description}</p>

                {/* Arrow between steps (mobile) */}
                {i < processSteps.length - 1 && (
                  <div className="md:hidden flex justify-center w-full my-2 text-[#3182F6] text-xl">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-20 bg-[#EBF0FF] border border-[#3182F6]/20 rounded-2xl p-8 text-center">
          <p className="text-2xl font-black text-[#191F28] mb-3">
            기획만 하지 않아요.
          </p>
          <p className="text-[#4E5968] leading-relaxed max-w-xl mx-auto">
            직접 실행하고 결과를 냈어요.
            <br />
            수료생 프로그램을 기획하고 취업률을 높였고,
            행사를 기획하고 직접 운영했어요.
            분석하고 쓰고 운영하고 증명했습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
