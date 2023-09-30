import React from 'react';
import { Helmet } from 'react-helmet-async';
import mainImage from 'assets/images/main_image.png';

const MetaTag = () => {
  return (
    <Helmet>
      <title>나는 어떤 계란 요리일까?</title>

      <meta name="description" content="계란 요리로 보는 성격 유형 테스트" />
      <meta name="keywords" content="심리테스트, 성격 유형 검사, 성격 유형 테스트, 성격 테스트, 성격유형검사, 성격 검사, 유형 검사, 계란 요리 유형, mbti 테스트, 계란, 계란 테스트, 계란요리 테스트, 계란 요리 테스트, 계란 요리, test, mbti, MBTI, 계비티아이, 계bti, 계BTI, 계란MBTI, 계란 MBTI, 계란 mbti, 계란mbti, EBTI, ebti, egg mbti, eggmbti, EGG MBTI" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="나는 어떤 계란 요리일까?" />
      <meta property="og:site_name" content="나는 어떤 계란 요리일까?" />
      <meta property="og:description" content="계란 요리로 보는 성격 유형 테스트" />
      <meta property="og:image" content={mainImage} />
      <meta property="og:url" content="https://egg-type.netlify.app/" />

      <meta name="twitter:title" content="나는 어떤 계란 요리일까?" />
      <meta name="twitter:description" content="계란 요리로 보는 성격 유형 테스트" />
      <meta name="twitter:image" content={mainImage} />

      <link rel="canonical" href="https://egg-type.netlify.app/" />
    </Helmet>
  )
}

export default MetaTag;