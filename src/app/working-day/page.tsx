import WorkingDayCalculator from "@/components/WorkingDayCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://every-calculator.vercel.app"),
  title: "워킹데이 계산기",
  description: "워킹데이를 계산하는 도구입니다.",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "/working-day",
    title: "워킹데이 계산기",
    description:
      "시작일과 종료일을 입력하고 휴일을 설정하여 워킹데이를 계산하세요.",
    images: [
      {
        url: "/images/preview.jpeg",
        alt: "워킹데이 계산기 미리보기 이미지",
      },
    ],
  },
};

export default function Page() {
  return <WorkingDayCalculator />;
}
