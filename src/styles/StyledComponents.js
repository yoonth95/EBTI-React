import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "BMJUA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'BMHANNAPro';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.0/BMHANNAPro.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color: ${({ $bgColor }) => $bgColor};
  }

  ::-webkit-scrollbar {
    width: 0 !important;
    display: none !important;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  height: 100vh;
  text-align: center;
  position: relative;
  max-width: ${({ $maxWidth }) => $maxWidth};
  align-items: center;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
`;

// Main css
export const H1 = styled.h1`
  font-family: "BMJUA";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 30px;
  color: #8b4513;

  margin-top: ${({ $marginTop }) => $marginTop};

  @media (max-width: 425px) {
    font-size: 1.8rem;
  }

  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
`;

export const H2 = styled.h2`
  background: linear-gradient(to top, #ffe400 50%, transparent 50%);
  font-family: "BMJUA";
  font-style: normal;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 36px;
  color: #654321;
  margin: 10px auto;

  @media (max-width: 425px) {
    font-size: 2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.6rem;
  }
`;

export const Image = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: contain;
  margin: ${({ $margin }) => $margin};

  @media (max-width: 425px) {
    width: 17rem;
    height: 17rem;
  }
`;

export const StartButton = styled.button`
  margin: 20px 0 100px 0;
  background: #ffe400;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  width: 13rem;
  height: 5rem;
  font-family: "BMJUA";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #654321;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    background-color: #e3cb00;
  }

  @media (max-width: 425px) {
    width: 13rem;
    height: 5rem;
    font-size: 2rem;
  }
`;

// Test css
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const TestButton = styled.button`
  margin-top: 20px;
  background: #ffe400;
  border-radius: 100px;
  width: 18rem;
  font-family: "BMJUA";
  font-style: normal;
  font-weight: 100;
  font-size: 1.1rem;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #654321;
  justify-content: center;
  padding: 0.5rem 2rem;
  height: 68px;
  transition: transform 0.2s ease-in-out 0s, background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  animation: ${fadeIn} 2s;

  &:hover {
    color: #654321;
    transform: translateY(-4px);
  }
`;

export const ProgressDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 100px;
`;

export const ProgressText = styled.span`
  color: #8b4513;
  margin-bottom: 5px;
  font-size: 13px;
  text-align: end;
`;

export const ProgressLine = styled.div`
  display: flex;
  align-items: center;
`;

export const PrevBtn = styled.span`
  border: 1px solid #fff2cc;
  width: 22px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;
  background-color: #fff;
  margin: 0 5px 0 0;
  color: #8b4513;
  cursor: pointer;
`;

export const Progress = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  height: 1rem;
  overflow: hidden;
  line-height: 0;
  font-size: 0.75rem;
  border-radius: 0.25rem;
`;

export const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({ $width }) => $width}%;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  transition: width 0.6s ease;
  background-color: #ffe400;
`;

export const QuestionDiv = styled.div`
  width: 86%;
  max-width: 480px;
`;

export const Question = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b4513;
  font-family: "BMHANNAPro";
  font-style: normal;
  font-size: 1.5rem;
  flex-direction: column;
  animation: ${fadeIn} 2s;

  svg {
    margin-bottom: 15px;
    font-size: 2rem;
  }
`;

export const Loading = styled.div`
  margin-top: 150px;

  p {
    color: #8b4513;
    font-family: "BMHANNAPro";
    font-style: normal;
    font-size: 2.5rem;
  }
`;

// result 페이지
export const ResultContainer = styled.main`
  background-color: rgb(255, 255, 255);
  position: absolute;
  right: 0px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  overflow: visible;
  max-width: 550px;
  z-index: 2;
  height: 100%;
  width: 100%;
  margin: auto;
`;

export const TotalPage = styled.div`
  transition: background-color 0.2s ease;
  z-index: 99;
  width: 100%;
  height: auto;
  min-height: 100%;
  position: absolute;
  right: 0px;
  left: 0px;
  margin-left: auto;
  margin-right: auto;
  top: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff2cc;
  box-shadow: 0 -2px 10px 1px rgba(0, 0, 0, 0.2);
`;

export const ResultPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ResultTitleH1 = styled.h1`
  font-family: "BMJUA";
  font-style: normal;
  font-weight: 100;
  font-size: 2.5rem;
  margin-top: 50px;
  text-align: center;
  color: #8b4513;
`;

export const ResultTitleP = styled.p`
  font-family: "BMHANNAPro";
  font-style: normal;
  font-weight: 100;
  font-size: 1.3rem;
  text-align: center;
  color: #654321;
`;

export const ResultImage = styled.div`
  img {
    width: 20rem;
    height: 20rem;
    object-fit: contain;
  }

  div {
    font-family: "BMHANNAPro";
    font-style: normal;
    font-weight: 100;
    font-size: 1.2rem;
    text-align: center;
    color: #654321;
    line-height: 1.6rem;
    letter-spacing: 1px;
  }

  @media (max-width: 425px) {
    img {
      width: 17rem;
      height: 17rem;
    }
  }
`;

export const ResultInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  ul {
    padding-left: 1rem;
    margin: 20px 0 40px 0;
  }

  ul li {
    margin-bottom: 10px;
    font-family: "BMHANNAPro";
  }
`;

export const Guideline = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: "BMJUA";
  background-color: #fff9c4;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const GuidelineTitle = styled.h2`
  font-size: 24px;
  color: #ffab00;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const GuidelineList = styled.ol`
  list-style: decimal;
  padding: 0 10px 0 20px;

  & li {
    font-family: "BMHANNAPro";
    font-size: 16px;
    color: #424242;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    & li {
      font-size: 14px;
    }
  }
`;

export const UrlDown = styled.div`
  width: 100%;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SharedButtonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #ffab00;
  color: #424242;
  padding: 10px 15px;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  font-size: 16px;
  font-family: "BMHANNAPro";
  cursor: pointer;

  &:hover {
    background-color: #ffe400;
    text-decoration: none;
  }
`;

export const YoutubeLink = styled.a`
  ${SharedButtonStyles}

  @media (max-width: 480px) {
    padding: 8px 12px;
  }
`;

export const ResultShare = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 1rem;
    font-size: 16px;
    font-family: "BMHANNAPro";
  }
`;

export const Shares = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const ShareButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: 0px center;
  padding: 0px;
  border: 0px;
  outline: 0px;

  &:hover {
    transform: translateY(-4px);
  }

  & svg {
    width: 30px;
    height: 30px;
    fill: rgb(255, 255, 255);
  }

  &.clip {
    background-color: rgb(255, 138, 115);
  }

  &.kakao {
    background-color: rgb(247, 213, 1);
  }

  &.facebook {
    background-color: rgb(57, 85, 152);
  }

  &.twitter {
    background-color: rgb(45, 182, 247);
  }
`;

export const ResultBtn = styled.div`
  width: 35%;
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  display: flex;
  margin: 30px 0 50px 0;
  flex-direction: column;

  button {
    ${SharedButtonStyles};
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 50%;
  }
`;

export const FooterBox = styled.div`
  width: 100%;
  background-color: #f6e5c4;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const FooterInfo = styled.div`
  font-family: "BMJUA";
  font-weight: 500;
`;

export const FooterHeader = styled.div`
  color: #8b4513;
  font-weight: 700;
  font-size: 15px;
`;

export const FooterName = styled.div`
  color: #ffab00;
  font-weight: 600;
  font-size: 13px;
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 10px;
  text-decoration: none;
  font-size: 20px;
  background: aliceblue;
  border-radius: 50%;
  transition: background-color 0.5s;
  cursor: pointer;
  color: #ffab00;

  &:hover {
    text-decoration: underline;
    background-color: #ffab00;
    color: #fff;
  }
`;

export const Copyright = styled.p`
  font-size: 0.9em;
  margin-top: 10px;
  color: #8b45134f;
`;

// view 페이지
export const ViewContainer = styled.main`
  display: flex;
  flex-direction: column;
  // height: calc(100vh - 16px);
  text-align: center;
  position: relative;
  max-width: 425px;
  align-items: center;
  padding-right: 0px;
  padding-left: 0px;
  margin: auto;
  justify-content: center;

  &:first-child::before {
    content: "";
    height: 60px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 5px;
  width: 100%;
  height: 540px;
  margin: 25px 0px 50px 0;
`;

export const GridItem = styled.a`
  background-color: #fff;
  border: none;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-decoration-line: none;

  &:hover {
    background-color: #ffcc00;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & p {
    text-decoration: none;
    margin: 5px 0 0 0;
    font-family: "BMJUA";
    color: #654321;
  }

  @media (max-width: 375px) {
    & p {
      font-size: 0.9rem;
    }
  }
`;

// 카카오 광고
export const KakaoAd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: -webkit-fill-available;
`;

// NotFound.jsx
const wobble = keyframes`
  0% {
    transform: rotate(0deg) translate(-50%, -50%);
  }
  25% {
    transform: rotate(35deg) translate(-50%, -50%);
  }
  75% {
    transform: rotate(-35deg) translate(-50%, -50%);
  }
  100% { 
    transform: rotate(0deg) translate(-50%, -50%);
  }
`;

export const Egg = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 250px;
  background: #fff;
  border-top-left-radius: 50% 60%;
  border-top-right-radius: 50% 60%;
  border-bottom-left-radius: 50% 40%;
  border-bottom-right-radius: 50% 40%;
  box-shadow: inset -10px -5px #eaefdd;
  animation: ${wobble} 8s linear infinite;
  transform-origin: 0 50%;
  zoom: ${({ $zoom }) => $zoom};
`;

export const Yolk = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 130px;
  height: 130px;
  background: #ffdf50;
  border-radius: 100%;
  box-shadow: inset -5px -5px #f1ad41;

  & .face .eyes {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    &::before,
    &::after {
      display: block;
      content: "";
      width: 12px;
      height: 12px;
      background: #884e2c;
      border-radius: 100%;
      margin: 0 30px;
    }
  }

  & .face .mouth {
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 40px;
    height: 20px;
    background: #884e2c;
    border-radius: 15px 15px 70px 70px;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    &::after {
      display: block;
      content: "";
      width: 20px;
      height: 8px;
      background: #cd5b4d;
      border-radius: 5px 5px 100% 100%;
      margin-bottom: 2px;
    }
  }
`;

export const ReturnButton = styled.button`
  margin-top: 20px;
  background: #ffe400;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  width: 12rem;
  height: 4rem;
  font-family: "BMJUA";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #654321;
  justify-content: center;
  transition: 0.3s;
`;
