import DDayCalculator from "@/components/DDayCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://every-calculator.vercel.app"),
  title: "D-day 계산기",
  description: "목표 날짜까지 남은 일 수를 계산하세요.",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "/d-day",
    title: "D-day 계산기",
    description: "목표 날짜까지 남은 일 수를 계산하세요.",
    images: [
      {
        url: "/images/preview.jpeg",
        alt: "D-day 계산기 미리보기 이미지",
      },
    ],
  },
};

export default function Page() {
  return <DDayCalculator />;
}
