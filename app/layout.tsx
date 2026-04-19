import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "이규리 (Gyu Ri Lee) | 기획·운영·콘텐츠 프리랜서",
  description:
    "기획부터 실행까지, 혼자 다 해본 서비스 기획자. 서비스기획, 이벤트기획, UX리서치, 콘텐츠 운영, 카피라이팅 프리랜서 이규리입니다.",
  keywords: [
    "프리랜서",
    "서비스기획",
    "이벤트기획",
    "UX리서치",
    "콘텐츠운영",
    "카피라이팅",
    "이규리",
    "PM",
  ],
  openGraph: {
    title: "이규리 | 기획·운영·콘텐츠 프리랜서",
    description: "기획부터 실행까지, 혼자 다 해본 사람. 의뢰 환영합니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKr.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
