import { FC } from "react";
import styled from 'styled-components';
import { breakpoint } from "../../../theme";

import { StyledImage } from ".";

import Boost from '../../images/boost/bladder-boost.png';
import Testifer from '../../images/testifier.png';

interface BoostSectionProps {
  title: string;
  para: string;
  btnText: string;
  secondary?: boolean;
}

const BoostSection: FC<BoostSectionProps> = ({ children, title, para, btnText, secondary }) => {
  return (
    <Wrapper secondary={secondary}>
      <RelativeWrapper data-aos="fade-up">
        <ContentWrapper secondary={secondary}>
          <ImageWrapper>
            <StyledImage src={Boost} layout="fill" $borderRadius="10px" />
          </ImageWrapper>
          <TextWrapper>
            <Title secondary={secondary}>{title}</Title>
            <Para>{para}</Para>
            {children}
            <BoostButton secondary={secondary}>{btnText}</BoostButton>
          </TextWrapper>
        </ContentWrapper>
        <Testimony secondary={secondary}>
          <StyledImage src={Testifer} width={80} height={80} $borderRadius="50%" />
          <TestimonyContent secondary={secondary}>
            <p>“First time I’ve had the confidence not to wear a pad in many years”</p>
            <span>JUDE FAN, 53 YEARS</span>
          </TestimonyContent>
        </Testimony>
      </RelativeWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section<{ secondary?: boolean; }>`
  background: ${({ theme, secondary }) => secondary ? theme.primaryColor : theme.tertiaryColor};
  color: ${({ theme, secondary }) => secondary ? theme.tertiaryColor : theme.textColor};
  padding: 1rem;
  margin-top: 2rem;
  @media (min-width: ${breakpoint.screenSMmin}) {
    padding: 3rem;
    margin-top: revert;
   }
`;

const RelativeWrapper = styled.div`
    position: relative;
    top: -90px;

    @media (min-width: ${breakpoint.screenSMmin}) {
      position: static;
   }
`;

const ImageWrapper = styled.div`
  width: 338.13px;
  height: 264.21px;
  position: relative;
  border-radius: ${({ theme }) => theme.secondaryRadius};
  @media (min-width: ${breakpoint.screenSMmin}) {
    width: 635px;
    height: 500px;
  }
`;

const ContentWrapper = styled.div<{ secondary?: boolean; }>`
    @media (min-width: ${breakpoint.screenSMmin}) {
      display: flex;
      align-items: center;
      flex-direction: ${({ secondary }) => secondary ? 'row' : 'row-reverse'};
      justify-content: space-around;
  }
`;

const TextWrapper = styled.div`
   @media (min-width: ${breakpoint.screenSMmin}) {
    width: 35%;
  }
`;

export const Title = styled.h2<{ secondary?: boolean; }>`
  color: ${({ theme, secondary }) => secondary ? theme.tertiaryColor : theme.primaryColor};
  font-weight: 500;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;

  @media (min-width: ${breakpoint.screenSMmin}) {
    font-size: 3.125rem;
  }
`;

export const Para = styled.p`
  font-family: ${({ theme }) => theme.secondaryFont};
  line-height: 25.6px;
`;

export const StatContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0.5rem 0 1.5rem 0;
`;

export const Stat = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  small {
    font-family: ${({ theme }) => theme.secondaryFont};
    font-size: 0.875rem;
  }

  @media (min-width: ${breakpoint.screenSMmin}) {
     flex: revert;
     padding: 1rem;
    }
`;

export const StatContent = styled.span`
  display: flex;
  align-items: center;
  gap: 0.15rem;

  span {
    font-size: 2.75rem;
  }
`

export const BoostButton = styled.button<{ secondary?: boolean; }>`
    background: ${({ theme, secondary }) => secondary ? theme.tertiaryColor : theme.primaryColor};
    color: ${({ theme, secondary }) => secondary ? theme.primaryColor : theme.tertiaryColor};
    font-family: ${({ theme }) => theme.secondaryFontMedium};

    border: 1px solid transparent;
    font-size: 0.875rem;
    width: 100%;
    border-radius: 25px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    @media (min-width: ${breakpoint.screenSMmin}) {
      width: 50%;
    }
`;

const Testimony = styled.div<{ secondary?: boolean; }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem 0;
  border-top: 1px solid ${({ secondary }) => secondary ? '#ff6443' : '#e9e7e7'};

  @media (min-width: ${breakpoint.screenSMmin}) {
    padding: 2rem 0;
   }
`;


const TestimonyContent = styled.div<{ secondary?: boolean; }>`
  p {
    font-size: 1.25rem;
    line-height: 24px;
    margin-bottom: 0.25rem;
  }

  span {
    font-family: ${({ theme }) => theme.secondaryFont};
    font-size: 0.625rem;
    color: ${({ theme, secondary }) => secondary ? theme.tertiaryColor : theme.primaryColor};
  }
`;

export { BoostSection };