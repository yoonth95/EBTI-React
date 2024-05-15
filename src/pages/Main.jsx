import React from "react";
import { useNavigate } from "react-router-dom";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase/firebaseInit";
import { GlobalStyles, Container, H1, H2, Image, StartButton } from "styles/StyledComponents";
import img1 from "assets/images/img1.png";

const Main = () => {
  const navigate = useNavigate();

  const move = () => {
    logEvent(analytics, "start");
    navigate("/test");
  };

  return (
    <>
      <GlobalStyles $bgColor={"#fff2cc"} />
      <Container $justifyContent={"center"} $maxWidth={"540px"}>
        <div>
          <H1>성격 유형 테스트</H1>
          <H2>나는 어떤 계란 요리일까?</H2>
          <Image $margin="35px 0" src={img1} alt="메인이미지" title="메인이미지" />
        </div>
        <StartButton type="button" onClick={() => move()}>
          시작하기
        </StartButton>
      </Container>
    </>
  );
};

export default Main;
