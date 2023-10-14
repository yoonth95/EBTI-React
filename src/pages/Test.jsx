import React, { useEffect, useRef, useState } from 'react';
import questionData from 'data/question';
import resultData from 'data/result';
import loadingImage from 'assets/images/egg_loading.gif';
import { GlobalStyles, Container, TestButton, ProgressDiv, ProgressText, ProgressLine, PrevBtn, Progress, ProgressBar, QuestionDiv, Question, Loading, Image } from 'styles/StyledComponents'
import { faChevronLeft, faFaceGrinBeamSweat, faBookOpenReader, faListCheck, faPersonCircleQuestion, faPencil, faUtensils, faMapLocationDot, faKitchenSet, faChildren, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const [qNum, setQNum] = useState(0);
  const [choices, setChoices] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const iconMap = {
    faFaceGrinBeamSweat: faFaceGrinBeamSweat,
    faBookOpenReader: faBookOpenReader,
    faListCheck: faListCheck,
    faPersonCircleQuestion: faPersonCircleQuestion,
    faPencil: faPencil,
    faUtensils: faUtensils,
    faMapLocationDot: faMapLocationDot,
    faKitchenSet: faKitchenSet,
    faChildren: faChildren,
    faReceipt: faReceipt,
    faThumbsUp: faThumbsUp, 
    faFaceSadTear: faFaceSadTear
  };

  useEffect(() => {
    if (qNum === questionData.length-1) {
      handleResults();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, [qNum, choices]);

  const prevClick = () => {
    if (qNum > 0) {
      setQNum(prev => prev-1);
    }
  }

  const btnClick = (choice) => {
    setChoices(prev => ({ ...prev, [qNum]: choice }));
    const nextNum = qNum+1;
    if (qNum < questionData.length -1) {
      setQNum(nextNum);
    }
  }

  const decodeUnicode = (str) => {
    return decodeURIComponent(
      atob(str)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  }

  const handleResults = async () => {
    if (Object.keys(choices).length === questionData.length) {
      const typeIdx = await weightCalc();
      setIsFinished(true);
      
      timeoutRef.current = setTimeout(() => {
        navigate(`/result?idx=${typeIdx}`);
      }, 2000);
    }
  }

  const weightCalc = async () => {
    let sumList = [0, 0, 0, 0, 0, 0, 0, 0];
    const decodeWeight = JSON.parse(decodeUnicode(process.env.REACT_APP_WEIGHT));

    for (let i in choices) {
      for (let [index, item] of decodeWeight[i][choices[i]].entries()) {
        sumList[index] += item;
      }
    }

    const first = sumList[0] > sumList[1] ? 'E' : 'I';
    const second = sumList[2] > sumList[3] ? 'S' : 'N';
    const fourth = sumList[4] > sumList[5] ? 'J' : 'P';
    const third = sumList[6] > sumList[7] ? 'T' : 'F';
    const typeIdx = resultData[first+second+third+fourth];

    return typeIdx;
  }

  const renderTextWithBreaks = (text) => {
    return text.split('<br />').map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index !== text.split('<br />').length - 1 && <br />}
      </React.Fragment>
    ));
  }

  return (
    <>
      <GlobalStyles bgColor={'#fff2cc'} />

      <Container justifyContent={'flex-start'} maxWidth={'480px'}>
        {isFinished ? 
          <Loading>
            <p>loading...</p>
            <Image src={loadingImage} alt='로딩이미지' title='로딩이미지'/>
          </Loading>
          :
          <>
            <ProgressDiv>
              <ProgressText><strong>{qNum+1}</strong> / 12</ProgressText>
              <ProgressLine>
                <PrevBtn onClick={prevClick}><FontAwesomeIcon icon={faChevronLeft} /></PrevBtn>
                <Progress>
                  <ProgressBar width={((qNum+1)*100)/questionData.length} role='progressbar' aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></ProgressBar>
                </Progress>
              </ProgressLine>
            </ProgressDiv>

            <QuestionDiv>
              <Question key={qNum}>
                <FontAwesomeIcon icon={iconMap[questionData[qNum]["question"][0]]} />
                {renderTextWithBreaks(questionData[qNum]["question"][1])}
              </Question>
            </QuestionDiv>

            <div key={qNum}>
              <TestButton type='button' id='a1' onClick={() => btnClick('1')}>{renderTextWithBreaks(questionData[qNum]["choice1"])}</TestButton>
              <TestButton type='button' id='a2' onClick={() => btnClick('2')}>{renderTextWithBreaks(questionData[qNum]["choice2"])}</TestButton>
            </div>
          </>
        }
      </Container>
    </>
  );
};

export default Test;