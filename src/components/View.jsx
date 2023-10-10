import React, { useEffect, useState } from 'react';
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
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    const images = Array.from({ length: 16 }, (_, i) => require(`../assets/images/${i+1}.png`))
    setImgList(images);

    let ins = document.createElement('ins');
    let scr = document.createElement('script');
    ins.className = 'kakao_ad_area';
    ins.style = "display:none; width:100%;";
    scr.async = 'true';
    scr.type = "text/javascript";
    scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    ins.setAttribute('data-ad-width','320');
    ins.setAttribute('data-ad-height','50');
    ins.setAttribute('data-ad-unit','DAN-cTC0ZH3F42SrxwqD');
    document.querySelector('.adfit').appendChild(ins);
    document.querySelector('.adfit').appendChild(scr);
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
        <KakaoAd className='adfit'></KakaoAd>
      </ViewContainer>
    </>
  );
};

export default View;