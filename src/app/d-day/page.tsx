import DDayCalculator from "@/components/DDayCalculator";
import KakaoAdFit from "@/components/KakaoAdFit";
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
  return (
    <>
      <KakaoAdFit adUnit="DAN-bo76BqgAg2ORtsJ8" adWidth="728" adHeight="90" />
      <DDayCalculator />
      <KakaoAdFit adUnit="DAN-YjHamntPijrEDE2M" adWidth="300" adHeight="250" />
      <KakaoAdFit adUnit="DAN-WUI7ADqb7y9dJzyd" adWidth="250" adHeight="250" />
    </>
  );
}
