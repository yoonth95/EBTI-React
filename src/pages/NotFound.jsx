import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalStyles, Container, H1, Egg, Yolk, ReturnButton } from 'styles/StyledComponents';
import Footer from 'components/Footer';

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

        {windowHeight > 650 && <Footer />}
      </Container>
    </>
  );
};

export default NotFound;