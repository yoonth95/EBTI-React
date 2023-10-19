import React, { useEffect, useState } from 'react';
import resultInfo from 'data/resultInfo';
import { GlobalStyles, ResultContainer, TotalPage, ResultPage, ResultTitleH1, ResultTitleP, ResultImage, ResultInfo, Guideline, GuidelineTitle, GuidelineList, UrlDown, YoutubeLink, ResultShare, Shares, ShareButton, ResultBtn, KakaoAd, FooterBox, FooterHeader, FooterName, FooterIcons, FooterLink, Copyright } from 'styles/StyledComponents'
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faReply, faTableList } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faVimeoV } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Result = () => {

  const mainUrl = "https://egg-mbti.net/";
  const currentUrl = window.location.href;

  const location = useLocation();
  const navigate = useNavigate();
  const [eggTypeInfo, setEggTypeInfo] = useState({
    typeTitle: '',
    typeImage: '',
    typeName: '',
    typeTag: '',
    typeUrl: '',
    typeInfo: [],
    typeGuide: []
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('idx');
    const eggType = resultInfo[query];

    // 동적 import
    import(`assets/images/${eggType['typeImage']}`).then((image) => {
      setEggTypeInfo(prev => ({
        ...prev,
        typeTitle: eggType['typeTitle'],
        typeImage: image.default,
        typeName: eggType['typeName'],
        typeTag: eggType['typeTag'],
        typeUrl: eggType['typeUrl'],
        typeInfo: splitList(eggType['typeInfo']),
        typeGuide: splitList(eggType['typeGuide'])
      }));
    });


  }, [location]);

  const renderTextWithBreaks = (text) => {
    return text.split('<br />').map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index !== text.split('<br />').length - 1 && <br />}
      </React.Fragment>
    ));
  }

  const splitList = (text) => {
    let newDic = [];
    text.split("/").forEach((item, index) => {
      newDic.push({ id: index, text: item })
    });

    return newDic;
  }

  const Retry = () => {
    navigate('/');
  }

  const AllView = () => {
    navigate('/view');
  }

  const ShareBtn = (type) => {
    if (type === 'kakao') {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: eggTypeInfo.typeName,
          description: eggTypeInfo.typeTag.replaceAll('<br />', ''),
          imageUrl: `${window.location.origin}${eggTypeInfo.typeImage}`,
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
        buttons: [
          {
            title: '테스트하기',
            link: {
              mobileWebUrl: mainUrl,
              webUrl: mainUrl,
            },
          },
          {
            title: '결과보기',
            link: {
              mobileWebUrl: currentUrl,
              webUrl: currentUrl,
            },
          },
        ],
      });
    } else if (type === 'facebook') {
      window.open("https://www.facebook.com/sharer/sharer.php?u=" + currentUrl);
    } else if (type === 'twitter') {
      const text = '나는 어떤 계란 요리일까?'
      window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" + currentUrl);
    } else {
      toast.success("복사 완료", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000  // 1초 후에 사라짐
      });

      navigator.clipboard.writeText(currentUrl);
    }
  }

  return (
    <>
      <GlobalStyles bgColor={'#fff'}/>

      <ResultContainer>
        <TotalPage>
          <ResultPage>
            <div>
              <ResultTitleH1>{eggTypeInfo.typeName}</ResultTitleH1>
              <ResultTitleP>{eggTypeInfo.typeTitle}</ResultTitleP>
            </div>

            <ResultImage>
              <img src={eggTypeInfo.typeImage} alt="타입이미지" />
              <div>{renderTextWithBreaks(eggTypeInfo.typeTag)}</div>
            </ResultImage>

            <ResultInfo>
              <ul>
                {eggTypeInfo.typeInfo.map((list) => (
                  <li key={list.id}>{list.text}</li>
                ))}
              </ul>

              <Guideline>
                <GuidelineTitle>Level-Up Guide</GuidelineTitle>
                <GuidelineList>
                  {eggTypeInfo.typeGuide.map((list) => (
                    <li key={list.id}>{list.text}</li>
                  ))}
                </GuidelineList>
              </Guideline>
            </ResultInfo>
          </ResultPage>

          <UrlDown>
            <YoutubeLink href={eggTypeInfo.typeUrl}>
              <span style={{marginRight: '5px'}}><FontAwesomeIcon icon={faCirclePlay} /></span>
              <span>레시피 보기</span>
            </YoutubeLink>
          </UrlDown>

          <ResultShare>
            <p>친구에게 테스트 공유하기</p>
            <Shares>
              <ShareButton className="kakao" onClick={() => ShareBtn("kakao")}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.678l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.299.8a.472.472 0 1 0 .884-.33l-.345-.926zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z"></path></g></svg></ShareButton>
              <ShareButton className="facebook" onClick={() => ShareBtn("facebook")}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path></g></svg></ShareButton>
              <ShareButton className="twitter" onClick={() => ShareBtn("twitter")}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path></g></svg></ShareButton>
              <ShareButton className="clip" onClick={() => ShareBtn("clip")}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"></path></g></svg></ShareButton>
            </Shares>
          </ResultShare>

          <ResultBtn>
            <button type="button" onClick={Retry}><FontAwesomeIcon icon={faReply} />&nbsp;테스트 다시 하기</button>
            <button type="button" onClick={AllView}><FontAwesomeIcon icon={faTableList} />&nbsp;전체 유형 보기</button>
          </ResultBtn>

          <FooterBox>
            <FooterHeader>Developer</FooterHeader>
            <FooterName>yoonth0919</FooterName>

            <FooterIcons>
              <FooterLink href='https://github.com/yoonth95' target='_blank'><FontAwesomeIcon icon={faGithub} /></FooterLink>
              <FooterLink href='https://velog.io/@yoonth95' target='_blank'><FontAwesomeIcon icon={faVimeoV} /></FooterLink>
            </FooterIcons>

            <Copyright>Copyright © 2023 yoonth0919 All rights reserved.</Copyright>
          </FooterBox>

        </TotalPage>
        
        <ToastContainer />
      </ResultContainer>
    </>
  );
};

export default Result;