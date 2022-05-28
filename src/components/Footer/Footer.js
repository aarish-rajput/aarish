import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0313-##-####">313-###-####</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:aarish.rajput27@gmail.com">
            aarish.rajput27@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Website Development</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.facebook.com/aarish.rajput.9469">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="#">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="#">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
