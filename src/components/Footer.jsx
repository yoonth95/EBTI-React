import React from 'react';
import { FooterBox, FooterHeader, FooterName, FooterIcons, FooterLink, Copyright } from 'styles/StyledComponents'
import { faGithub, faVimeoV } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({ position, bottom }) => {
  return (
    <>
      <FooterBox style={{ position: `${position}`, bottom: `${bottom}` }}>
        <FooterHeader>Developer</FooterHeader>
        <FooterName>yoonth0919</FooterName>

        <FooterIcons>
          <FooterLink href='https://github.com/yoonth95' target='_blank'><FontAwesomeIcon icon={faGithub} /></FooterLink>
          <FooterLink href='https://velog.io/@yoonth95' target='_blank'><FontAwesomeIcon icon={faVimeoV} /></FooterLink>
        </FooterIcons>

        <Copyright>Copyright © 2023 yoonth0919 All rights reserved.</Copyright>
      </FooterBox>
    </>
  );
};

export default Footer;