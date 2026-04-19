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
      // EmailJS 미설정 시 mailto fallback
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
      <div className="relative bg-[#F5F1E8] rounded-t-3xl md:rounded-3xl w-full md:max-w-2xl max-h-[95vh] overflow-y-auto shadow-2xl animate-fade-in-up">
        {/* Header */}
        <div className="sticky top-0 bg-[#F5F1E8] border-b border-[#D8CEB8] px-6 md:px-8 py-5 flex items-center justify-between z-10">
          <div>
            <h2 className="text-xl font-black text-[#1C1C1C]">의뢰서 작성</h2>
            <p className="text-sm text-[#6B6B6B]">어떤 프로젝트인지 알려주세요</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#EEE8D8] flex items-center justify-center text-[#6B6B6B] hover:bg-[#D8CEB8] transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 py-6">
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="text-2xl font-black text-[#1C1C1C] mb-3">의뢰서가 전달되었습니다!</h3>
              <p className="text-[#6B6B6B] mb-8">
                빠르면 24시간 내로 답장드리겠습니다.
                <br />
                <span className="text-sm">lje1080@gmail.com</span>
              </p>
              <button
                onClick={() => { handleReset(); onClose(); }}
                className="bg-[#4A7C59] text-white font-bold px-8 py-3 rounded-full hover:bg-[#2D5016] transition-colors"
              >
                닫기
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">
                    이름 <span className="text-[#4A7C59]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    className="w-full bg-white border border-[#D8CEB8] rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#A8A8A8] focus:outline-none focus:border-[#4A7C59] focus:ring-1 focus:ring-[#4A7C59] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">
                    이메일 <span className="text-[#4A7C59]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="w-full bg-white border border-[#D8CEB8] rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#A8A8A8] focus:outline-none focus:border-[#4A7C59] focus:ring-1 focus:ring-[#4A7C59] transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">
                  연락처
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="010-0000-0000"
                  className="w-full bg-white border border-[#D8CEB8] rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#A8A8A8] focus:outline-none focus:border-[#4A7C59] focus:ring-1 focus:ring-[#4A7C59] transition-colors"
                />
              </div>

              {/* Inquiry type */}
              <div>
                <label className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  의뢰 유형 <span className="text-[#4A7C59]">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm((p) => ({ ...p, inquiryType: type }))}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${
                        form.inquiryType === type
                          ? "bg-[#4A7C59] text-white border-[#4A7C59]"
                          : "bg-white text-[#6B6B6B] border-[#D8CEB8] hover:border-[#4A7C59]"
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
                  <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">
                    예산 범위
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#D8CEB8] rounded-xl px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#4A7C59] focus:ring-1 focus:ring-[#4A7C59] transition-colors appearance-none"
                  >
                    <option value="">선택해주세요</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">
                    희망 일정
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    placeholder="예: 5월 중, 약 2주"
                    className="w-full bg-white border border-[#D8CEB8] rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#A8A8A8] focus:outline-none focus:border-[#4A7C59] focus:ring-1 focus:ring-[#4A7C59] transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">
                  프로젝트 상세 설명 <span className="text-[#4A7C59]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="어떤 프로젝트인지, 무엇이 필요한지 자유롭게 작성해주세요."
                  className="w-full bg-white border border-[#D8CEB8] rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#A8A8A8] focus:outline-none focus:border-[#4A7C59] focus:ring-1 focus:ring-[#4A7C59] transition-colors resize-none"
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="text-red-500 text-sm">
                  전송에 실패했습니다. lje1080@gmail.com으로 직접 연락해 주세요.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#4A7C59] text-white font-bold text-base py-4 rounded-xl hover:bg-[#2D5016] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "전송 중..." : "의뢰서 보내기 →"}
              </button>

              <p className="text-center text-xs text-[#A8A8A8]">
                lje1080@gmail.com으로 전달됩니다 · 빠르면 24시간 내 답장
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
