import PercentageCalculator from "@/components/PercentageCalculator";
import KakaoAdFit from "@/components/KakaoAdFit";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://every-calculator.vercel.app"),
  title: "퍼센트 계산기",
  description: "값과 퍼센트를 입력하여 다양한 퍼센트 계산을 수행하세요.",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "/percentage-cal",
    title: "퍼센트 계산기",
    description: "값과 퍼센트를 입력하여 다양한 퍼센트 계산을 수행하세요.",
    images: [
      {
        url: "/images/preview.jpeg",
        alt: "퍼센트 계산기 미리보기 이미지",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <KakaoAdFit adUnit="DAN-bo76BqgAg2ORtsJ8" adWidth="728" adHeight="90" />
      <PercentageCalculator />
      <KakaoAdFit adUnit="DAN-YjHamntPijrEDE2M" adWidth="300" adHeight="250" />
      <KakaoAdFit adUnit="DAN-WUI7ADqb7y9dJzyd" adWidth="250" adHeight="250" />
    </>
  );
}
