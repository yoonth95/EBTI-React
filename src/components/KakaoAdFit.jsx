import React, { useEffect, useRef } from 'react';
import { KakaoAd } from 'styles/StyledComponents';

const KakaoAdFit = ({ unitValue, adWidth, adHeight }) => {
  const scriptElement = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://t1.daumcdn.net/kas/static/ba.min.js"
    );
    script.setAttribute(
      "charset",
      "utf-8"
    );

    script.setAttribute("async", "true");
    scriptElement.current?.appendChild(script);
  }, []);

  return (
    <>
      <KakaoAd ref={scriptElement}>
        <ins
          className="kakao_ad_area"
          style={{ display: "none" }}
          data-ad-unit={unitValue}
          data-ad-width={adWidth}
          data-ad-height={adHeight}
        />
      </KakaoAd>
    </>
  );
};

export default KakaoAdFit;