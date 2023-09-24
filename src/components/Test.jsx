import React, { useEffect, useState } from 'react';
import questionData from 'data/question';
import resultData from 'data/result';
import loadingImage from 'assets/images/egg_loading.gif';
import { GlobalStyles, Container, TestButton, ProgressDiv, ProgressText, PrevBtn, Progress, ProgressBar, QuestionDiv, Question, Loading, Image } from 'styles/StyledComponents'
import { faChevronLeft, faFaceGrinBeamSweat, faBookOpenReader, faListCheck, faPersonCircleQuestion, faPencil, faUtensils, faMapLocationDot, faKitchenSet, faChildren, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Test = () => {
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

  const handleResults = () => {
    if (Object.keys(choices).length === questionData.length) {
      setIsFinished(true);
      const TotalList = weightCalc();
      const first = TotalList[0] > TotalList[1] ? 'E' : 'I';
      const second = TotalList[2] > TotalList[3] ? 'S' : 'N';
      const fourth = TotalList[4] > TotalList[5] ? 'J' : 'P';
      const third = TotalList[6] > TotalList[7] ? 'T' : 'F';
      const typeIdx = resultData[first+second+third+fourth];
      
      // setTimeout(() => {
      //     location.href = `/result?idx=${typeIdx}`;
      // }, 3000)
    }
  }

  const weightCalc = () => {
    let sumList = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i in choices) {
      for (let [index, item] of JSON.parse(decodeUnicode(process.env.REACT_APP_WEIGHT))[i][choices[i]].entries()) {
        sumList[index] += item;
      }
    }
    return sumList;
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
              <div style={{display: 'flex', alignItems: 'center'}}>
                <PrevBtn onClick={prevClick}><FontAwesomeIcon icon={faChevronLeft} /></PrevBtn>
                <Progress>
                  <ProgressBar role='progressbar' aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{width: `${((qNum+1)*100)/questionData.length}%`}}></ProgressBar>
                </Progress>
              </div>
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