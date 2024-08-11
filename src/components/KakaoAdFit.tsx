"use client";

import { useEffect } from "react";

const KakaoAdFit = () => {
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
      data-ad-unit="DAN-YjHamntPijrEDE2M"
      data-ad-width="300"
      data-ad-height="250"
    ></ins>
  );
};

export default KakaoAdFit;
