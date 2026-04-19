interface FooterProps {
  onInquiryClick: () => void;
}

export default function Footer({ onInquiryClick }: FooterProps) {
  return (
    <footer className="bg-[#191F28] text-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-black mb-1">이규리 / Gyu Ri Lee</p>
            <p className="text-[#8B95A1] text-sm">서비스기획 · 이벤트기획 · UX분석 · 콘텐츠운영 · 카피라이팅</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
            <button
              onClick={onInquiryClick}
              className="bg-[#3182F6] text-white font-bold px-6 py-3 rounded-full hover:bg-[#1B64DA] transition-colors text-sm"
            >
              의뢰하기 →
            </button>
            <a
              href="mailto:lje1080@gmail.com"
              className="text-[#8B95A1] text-sm hover:text-white transition-colors"
            >
              lje1080@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-[#2C3340] mt-8 pt-8 text-center text-[#4E5968] text-xs">
          © 2025 이규리 (Gyu Ri Lee). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
