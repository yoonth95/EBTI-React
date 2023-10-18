import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalStyles, Container, H1, Egg, Yolk, ReturnButton, FooterBox, FooterHeader, FooterName, FooterIcons, FooterLink, Copyright } from 'styles/StyledComponents'
import { faGithub, faVimeoV } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const navigate = useNavigate();

  const move = () => {
    navigate('/');
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const zoomValue = windowHeight < 550 ? 0.7 : 1;

  return (
    <>
      <GlobalStyles bgColor={'#fff2cc'}/>
      <Container justifyContent={'center'} maxWidth={'540px'}>
        <Egg zoom={zoomValue}>
          <Yolk>
            <div className='face'>
              <div className='eyes'></div>
              <div className='mouth'></div>
            </div>
          </Yolk>
        </Egg>
        <H1 marginTop={'180px'}>찾을 수 없는 페이지입니다.</H1>
        <ReturnButton type='button' onClick={() => move()}>돌아가기</ReturnButton>

        {windowHeight > 650 &&
          <FooterBox style={{position: 'fixed', bottom: '0'}}>
            <FooterHeader>Developer</FooterHeader>
            <FooterName>yoonth0919</FooterName>

            <FooterIcons>
              <FooterLink href='https://github.com/yoonth95' target='_blank'><FontAwesomeIcon icon={faGithub} /></FooterLink>
              <FooterLink href='https://velog.io/@yoonth95' target='_blank'><FontAwesomeIcon icon={faVimeoV} /></FooterLink>
            </FooterIcons>

            <Copyright>Copyright © 2023 yoonth0919 All rights reserved.</Copyright>
          </FooterBox>
        }
      </Container>
    </>
  );
};

export default NotFound;