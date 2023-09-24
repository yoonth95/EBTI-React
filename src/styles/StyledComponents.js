import styled, { createGlobalStyle, keyframes } from 'styled-components';

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
    background-color: ${props => props.bgColor}
  }

  ::-webkit-scrollbar {
    width: 0 !important;
    display: none !important;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent};
  height: 100vh;
  text-align: center;
  position: relative;
  max-width: ${props => props.maxWidth};
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

  @media (max-width: 425px) {
    font-size: 1.8rem;
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
`;

export const Image = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: contain;
  margin: ${props => props.margin};

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
  color: #8B4513;
  cursor: pointer;
`;

export const Progress = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  height: 1rem;
  overflow: hidden;
  line-height: 0;
  font-size: .75rem;
  border-radius: 0.25rem;
`;

export const ProgressBar = styled.div`
  background-color: #ffe400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  transition: width .6s ease;
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
  color: #8B4513;
  font-family: "BMHANNAPro";
  font-style: normal;
  font-size: 1.5rem;
  flex-direction: column;
  animation: ${fadeIn} 2s;

  svg {
    margin-bottom: 15px;
    font-size: 2rem;
  }
`

export const Loading = styled.div`
  margin-top: 150px;

  p {
    color: #8B4513;
    font-family: "BMHANNAPro";
    font-style: normal;
    font-size: 2.5rem;
  }
`