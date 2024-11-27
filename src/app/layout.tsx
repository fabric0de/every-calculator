<<<<<<< HEAD
import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
=======
import Footer from "@/components/Footer";
import { Metadata } from "next";
import "./globals.css";
>>>>>>> refs/remotes/origin/main

export const metadata: Metadata = {
  metadataBase: new URL("https://every-calculator.vercel.app"),
  title: "다양한 계산기 모음",
  description: "다양한 계산기를 간단하고 편리하게 활용해 보세요!",
  manifest: "/manifest.webmanifest",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <html lang="ko">
      <head>
        <link rel="/manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="black" />
        <meta name="mobile-web-app-title" content="Every Calculator" />
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script> */}
      </head>
      <body>
        <Header />
        <main className="sm:mt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
