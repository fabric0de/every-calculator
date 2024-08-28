"use client";

import { useEffect } from "react";

interface KakaoAdFitProps {
  adUnit: string;
  adWidth: string;
  adHeight: string;
}

const KakaoAdFit = ({ adUnit, adWidth, adHeight }: KakaoAdFitProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ins
      className="kakao_ad_area"
      style={{ display: "none" }}
      data-ad-unit={adUnit}
      data-ad-width={adWidth}
      data-ad-height={adHeight}
    ></ins>
  );
};

export default KakaoAdFit;
