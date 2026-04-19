"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const inquiryTypes = [
  "서비스 기획",
  "이벤트·행사 기획",
  "UX 리서치·분석",
  "콘텐츠·운영",
  "카피라이팅·글쓰기",
  "기타",
];

const budgetRanges = [
  "~50만원",
  "50만원~100만원",
  "100만원~300만원",
  "300만원 이상",
  "협의 후 결정",
];

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`[포트폴리오 의뢰] ${form.inquiryType} - ${form.name}`);
      const body = encodeURIComponent(
        `이름: ${form.name}\n이메일: ${form.email}\n연락처: ${form.phone}\n\n의뢰 유형: ${form.inquiryType}\n예산: ${form.budget}\n희망 일정: ${form.timeline}\n\n내용:\n${form.message}`
      );
      window.location.href = `mailto:lje1080@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          inquiry_type: form.inquiryType,
          budget: form.budget,
          timeline: form.timeline,
          message: form.message,
          to_email: "lje1080@gmail.com",
        },
        publicKey
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setForm({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      budget: "",
      timeline: "",
      message: "",
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-t-3xl md:rounded-3xl w-full md:max-w-2xl max-h-[95vh] overflow-y-auto shadow-2xl animate-fade-in-up">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E5E8EB] px-6 md:px-8 py-5 flex items-center justify-between z-10">
          <div>
            <h2 className="text-xl font-black text-[#191F28]">의뢰서 작성</h2>
            <p className="text-sm text-[#8B95A1]">어떤 프로젝트인지 알려주세요</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F7F8FA] flex items-center justify-center text-[#8B95A1] hover:bg-[#E5E8EB] transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 py-6">
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-black text-[#191F28] mb-3">전달됐어요!</h3>
              <p className="text-[#8B95A1] mb-8">
                빠르면 24시간 내로 답장드릴게요.
                <br />
                <span className="text-sm">lje1080@gmail.com</span>
              </p>
              <button
                onClick={() => { handleReset(); onClose(); }}
                className="bg-[#3182F6] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1B64DA] transition-colors"
              >
                닫기
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#191F28] mb-1.5">
                    이름 <span className="text-[#3182F6]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    className="w-full bg-[#F7F8FA] border border-[#E5E8EB] rounded-xl px-4 py-3 text-sm text-[#191F28] placeholder-[#8B95A1] focus:outline-none focus:border-[#3182F6] focus:ring-1 focus:ring-[#3182F6] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#191F28] mb-1.5">
                    이메일 <span className="text-[#3182F6]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="w-full bg-[#F7F8FA] border border-[#E5E8EB] rounded-xl px-4 py-3 text-sm text-[#191F28] placeholder-[#8B95A1] focus:outline-none focus:border-[#3182F6] focus:ring-1 focus:ring-[#3182F6] transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-[#191F28] mb-1.5">
                  연락처
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="010-0000-0000"
                  className="w-full bg-[#F7F8FA] border border-[#E5E8EB] rounded-xl px-4 py-3 text-sm text-[#191F28] placeholder-[#8B95A1] focus:outline-none focus:border-[#3182F6] focus:ring-1 focus:ring-[#3182F6] transition-colors"
                />
              </div>

              {/* Inquiry type */}
              <div>
                <label className="block text-sm font-medium text-[#191F28] mb-2">
                  의뢰 유형 <span className="text-[#3182F6]">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, inquiryType: type }))}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${
                        form.inquiryType === type
                          ? "bg-[#3182F6] text-white border-[#3182F6]"
                          : "bg-[#F7F8FA] text-[#8B95A1] border-[#E5E8EB] hover:border-[#3182F6]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget + Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#191F28] mb-1.5">
                    예산 범위
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full bg-[#F7F8FA] border border-[#E5E8EB] rounded-xl px-4 py-3 text-sm text-[#191F28] focus:outline-none focus:border-[#3182F6] focus:ring-1 focus:ring-[#3182F6] transition-colors appearance-none"
                  >
                    <option value="">선택해주세요</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#191F28] mb-1.5">
                    희망 일정
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    placeholder="예: 5월 중, 약 2주"
                    className="w-full bg-[#F7F8FA] border border-[#E5E8EB] rounded-xl px-4 py-3 text-sm text-[#191F28] placeholder-[#8B95A1] focus:outline-none focus:border-[#3182F6] focus:ring-1 focus:ring-[#3182F6] transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#191F28] mb-1.5">
                  프로젝트 상세 설명 <span className="text-[#3182F6]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="어떤 프로젝트인지, 무엇이 필요한지 자유롭게 작성해주세요."
                  className="w-full bg-[#F7F8FA] border border-[#E5E8EB] rounded-xl px-4 py-3 text-sm text-[#191F28] placeholder-[#8B95A1] focus:outline-none focus:border-[#3182F6] focus:ring-1 focus:ring-[#3182F6] transition-colors resize-none"
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="text-red-500 text-sm">
                  전송에 실패했어요. lje1080@gmail.com으로 직접 연락해주세요.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#3182F6] text-white font-bold text-base py-4 rounded-xl hover:bg-[#1B64DA] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "전송 중..." : "의뢰서 보내기 →"}
              </button>

              <p className="text-center text-xs text-[#8B95A1]">
                lje1080@gmail.com으로 전달돼요 · 빠르면 24시간 내 답장
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
