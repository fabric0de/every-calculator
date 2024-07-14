import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://every-calculator.vercel.app"),
  title: "다양한 계산기 모음",
  description: "다양한 계산기를 간단하고 편리하게 활용해 보세요!",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "다양한 계산기 모음",
    description: "다양한 계산기를 간단하고 편리하게 활용해 보세요!",
    images: [
      {
        url: "/images/preview.jpeg",
        alt: "다양한 계산기 모음 미리보기 이미지",
      },
    ],
  },
};

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-6">다양한 계산기 모음</h1>
        <Link href="/working-day">
          <button className="px-4 py-2 mb-4 bg-blue-500 text-white rounded">
            워킹데이 계산기
          </button>
        </Link>
        <Link href="/percentage-cal">
          <button className="px-4 py-2 mb-4 bg-blue-500 text-white rounded">
            퍼센트 계산기
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
