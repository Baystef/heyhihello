import { FC } from "react";
import styled from 'styled-components';

import { breakpoint } from "../../theme";
import { Title, Para, StyledImage, BoostButton as JoinButton } from './common';

import JoinJude from '../images/joinJude.png';

const JoinOurCommunity: FC = () => {
  return (
    <Wrapper data-aos="fade-up">
      <TextContainer>
        <Title>Products created for you
          with people like you</Title>
        <Para>Everything in the Jude range has been co-created and developed with our community until it hits ‘life-changing’ status. Want to join our testing panel? We’d love to meet you.</Para>
        <DesktopJoinButton>Join our community</DesktopJoinButton>
      </TextContainer>
      <ImageContainer>
        <ImageWrapper>
          <StyledImage src={JoinJude} layout="fill" $borderRadius="10px" />
        </ImageWrapper>
        <MobileJoinButton>Join our community</MobileJoinButton>
      </ImageContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 1rem;

  @media (min-width: ${breakpoint.screenSMmin}) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    gap: 4rem;
  }
`;

const ImageWrapper = styled.div`
  background: ${({ theme }) => theme.tertiaryColor};
  width: 100%;
  height: 217px;
  position: relative;
  margin-bottom: 1rem;
  border-radius: ${({ theme }) => theme.secondaryRadius};
  @media (min-width: ${breakpoint.screenSMmin}) {
    width: 39.73rem;
    height: 31.25rem;
  }
`;

const TextContainer = styled.div`
 @media (min-width: ${breakpoint.screenSMmin}) {
    flex: 1;
    padding: 2rem 6rem;
  }
`;

const ImageContainer = styled.div`
  @media (min-width: ${breakpoint.screenSMmin}) {
    flex: 1;
  }
`;

const MobileJoinButton = styled(JoinButton)`
   @media (min-width: ${breakpoint.screenSMmin}) {
    display: none;
  }
`;

const DesktopJoinButton = styled(JoinButton)`
   display: none;
   @media (min-width: ${breakpoint.screenSMmin}) {
    display: revert;
  }
`;

export default JoinOurCommunity;