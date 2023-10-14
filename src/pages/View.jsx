import React, { useEffect, useRef, useState } from 'react';
import { GlobalStyles, ViewContainer, H1, H2, GridContainer, GridItem, KakaoAd } from 'styles/StyledComponents'

const gridData = [
  { title: '계란 김밥', alt: '계란 김밥 이미지' },
  { title: '계란 말이', alt: '계란 말이 이미지' },
  { title: '계란 볶음밥', alt: '계란 볶음밥 이미지' },
  { title: '계란 샌드위치', alt: '계란 샌드위치 이미지' },
  { title: '계란 후라이', alt: '계란 후라이 이미지' },
  { title: '계란국', alt: '계란국 이미지' },
  { title: '계란찜', alt: '계란찜 이미지' },
  { title: '삶은 계란', alt: '삶은 계란 이미지' },
  { title: '스크램블 에그', alt: '스크램블 에그 이미지' },
  { title: '에그 베네딕트', alt: '에그 베네딕트 이미지' },
  { title: '에그 타르트', alt: '에그 타르트 이미지' },
  { title: '에그 머핀', alt: '에그 머핀 이미지' },
  { title: '에그 인 헬', alt: '에그 인 헬 이미지' },
  { title: '오믈렛', alt: '오믈렛 이미지' },
  { title: '포치드 에그', alt: '포치드 에그 이미지' },
  { title: '계란 카레', alt: '계란 카레 이미지' },
]

const View = () => {
  const scriptElement = useRef(null);
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    const images = Array.from({ length: 16 }, (_, i) => require(`../assets/images/${i+1}.png`))
    setImgList(images);

    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://t1.daumcdn.net/kas/static/ba.min.js"
    );
    script.setAttribute(
      "charset",
      "utf-8"
    )

    script.setAttribute("async", "true");
    scriptElement.current?.appendChild(script);
  }, []);

  return (
    <>
      <GlobalStyles bgColor={'#fff2cc'}/>
      <ViewContainer justifyContent={'center'} maxWidth={'425px'}>
        <div>
          <H1>성격 유형 테스트</H1>
          <H2>나는 어떤 계란 요리일까?</H2>
        </div>
        <GridContainer>
          {imgList.map((img, index) => (
            <GridItem key={index} href={`/result?idx=${index+1}`}>
              <img src={img} alt={gridData[index].alt} />
              <p>{gridData[index].title}</p>
            </GridItem>
          ))}
        </GridContainer>
        <KakaoAd ref={scriptElement}>
          <ins
            className="kakao_ad_area"
            style={{ display: "none" }}
            data-ad-unit="DAN-bnBf2UOV5jx9ThPY"
            data-ad-width="320"
            data-ad-height="100"
          />
        </KakaoAd>
      </ViewContainer>
    </>
  );
};

export default View;