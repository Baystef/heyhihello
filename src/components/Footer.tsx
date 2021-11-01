import { FC } from "react";
import styled from 'styled-components';

import { breakpoint } from "../../theme";
import { StyledImage, Title, Para } from "./common";

import Footer1 from '../images/footer1.png';
import Footer2 from '../images/footer2.png';
import Footer3 from '../images/footer3.png';
import Footer4 from '../images/footer4.png';

const Footer: FC = () => {
  return (
    <Wrapper data-aos="fade-up">
      <FooterHeader>
        <Title secondary>Read our blog: Hey Jude</Title>
        <FooterPara>All the latest from our team of doctors and specialists</FooterPara>
      </FooterHeader>
      <FooterBody>
        <FooterChild>
          <ImageWrapper>
            <StyledImage src={Footer1} layout="fill" $borderRadius="8px" />
          </ImageWrapper>
          <p>5 tips for how to pee correctly</p>
        </FooterChild>
        <FooterChild>
          <ImageWrapper>
            <StyledImage src={Footer2} layout="fill" $borderRadius="8px" />
          </ImageWrapper>
          <p>Great to be back to your pre-COVID routine…or not?</p>
        </FooterChild>
        <FooterChild>
          <ImageWrapper>
            <StyledImage src={Footer3} layout="fill" $borderRadius="8px" />
          </ImageWrapper>
          <p>How pelvic incontinence can affect your mental...</p>
        </FooterChild>
        <FooterChild>
          <ImageWrapper>
            <StyledImage src={Footer4} layout="fill" $borderRadius="8px" />
          </ImageWrapper>
          <p>This isn't good enough!</p>
        </FooterChild>
      </FooterBody>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.tertiaryColor};
  padding: 1rem;
  @media (min-width: ${breakpoint.screenSMmin}) {
   padding: 2rem;
  }
`;

const FooterHeader = styled.div`

`;

const FooterBody = styled.div`
  @media (min-width: ${breakpoint.screenSMmin}) {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
  }
`;

const FooterChild = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-top: 1px solid #ff6443;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  p {
    font-size: 1.5rem;
    line-height: 26.4px;
  }

  @media (min-width: ${breakpoint.screenSMmin}) {
    flex: 1;
    flex-direction: column;
    border-top: revert;
  }
`;

const FooterPara = styled(Para)`
  color: ${({ theme }) => theme.tertiaryColor};
`;

const ImageWrapper = styled.div`
  min-width: 85.04px;
  height: 85.04px;
  position: relative;
  border-radius: ${({ theme }) => theme.primaryRadius};
  @media (min-width: ${breakpoint.screenSMmin}) {
    min-width: 18.875rem;
    height: 21.875rem;
  }
`;



export default Footer;