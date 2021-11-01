import { FC } from "react";
import styled from 'styled-components';

import { breakpoint } from "../../../theme";
import TheRange from "../common/TheRange";
import { HeaderTextWrapper, HeaderPrimary, HeaderSecondary, HeaderButton } from "../Header";

import { RangeData } from "./data";


const ExploreTheRange: FC = () => {
  return (
    <Wrapper>
      <TheRange
        title="Explore the range"
        RangeData={RangeData}
        secondary
      />
      <KitContainer>
        <KitWrapper>
          <HeaderTextWrapper>
            <HeaderPrimary>Start with a trial kit</HeaderPrimary>
            <HeaderSecondary>Our Jude trial kit comes with Everyday Pads, All-day Liners and a handy bladder-care guide. <span style={{ fontWeight: 'bolder' }}>All for just £1.</span></HeaderSecondary>
            <HeaderButton>Get your trial kit</HeaderButton>
          </HeaderTextWrapper>
        </KitWrapper>
      </KitContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* background: ${({ theme }) => theme.tertiaryColor};
  padding: 2rem 0; */
  @media (min-width: ${breakpoint.screenSMmin}) {
    background: ${({ theme }) => theme.tertiaryColor};
    padding: 2rem 0;
  }
`;

const KitContainer = styled.div`
  @media (min-width: ${breakpoint.screenSMmin}) {
    padding: 0.5rem 2rem 3rem 2rem;
  }
`;

const KitWrapper = styled.div`
  display: none;

  @media (min-width: ${breakpoint.screenSMmin}) {
    background-image: url('/images/desktopTrialKit.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    
    display: grid;
    place-items: center;
    height: 400px;
    width: 100%;
    text-align: center;
    border-radius: ${({ theme }) => theme.primaryRadius};
  }
`;

export default ExploreTheRange;