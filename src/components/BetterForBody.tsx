import { FC } from "react";
import styled from 'styled-components';

import { breakpoint } from "../../theme";
import { Title, Para } from "./common";
import { HeaderFooterChild as BFBFooterChild } from "./Header";

import SmilingHeart from '../images/Icons/smiling-heart.svg';
import PlasticFree from '../images/Icons/plastic-free.svg';
import PlantBased from '../images/Icons/plant-based.svg';
import ChlorineFree from '../images/Icons/chlorine-free.svg';
import Hypoallergenic from '../images/Icons/hypoallergenic.svg';
import GreenSupplier from '../images/Icons/green-supplier.svg';
 
const BetterForBody: FC = () => {
  return ( 
    <Wrapper>
      <RelativeWrapper data-aos="fade-up">
        <BFBCard>
          <SmilingHeart />
          <StyledTitle>Better for your body. Better for the planet. </StyledTitle>
          <Para>Most pads take around 500-800 years to biodegrade in landfill - not ours.  Made with corn, bamboo and recycled wood cellulose, they’re completely gone within 100 days. Ta daa!</Para>
        </BFBCard>
        <BetterForBodyFooter>
          <BFBFooterChild>
            <PlantBased /> Plant-based
          </BFBFooterChild>
          <BFBFooterChild>
            <PlasticFree /> Plastic-free
          </BFBFooterChild>
          <BFBFooterChild>
            <ChlorineFree /> Chlorine-free
          </BFBFooterChild>
          <BFBFooterChild>
            <Hypoallergenic /> Hypoallergenic
          </BFBFooterChild>
          <BFBFooterChild>
            <GreenSupplier /> Green supplier
          </BFBFooterChild>
        </BetterForBodyFooter>
      </RelativeWrapper>
    </Wrapper>
   );
}

const Wrapper = styled.section`
  padding: 1rem;
  margin-top: 2rem;
`;

const RelativeWrapper = styled.div`
    position: relative;
    top: -90px;
`;

const BFBCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  width: 338.13px;
  padding: 1.5rem;
  background: ${({ theme }) => theme.tertiaryColor};
  border-radius: ${({ theme }) => theme.secondaryRadius};

  @media (min-width: ${breakpoint.screenSMmin}) {
    width: 100%;
    padding: 4rem 24rem;
  }
`;

const StyledTitle = styled(Title)`
  line-height: 22.4px;

  @media (min-width: ${breakpoint.screenSMmin}) {
    font-size: 3.125rem;
    line-height: 120%;
  }
`;

const BetterForBodyFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 1rem;
  flex-wrap: wrap;
  padding: 1rem 0;
  border-bottom: 1px solid #dbdbe7;
  @media (min-width: ${breakpoint.screenSMmin}) {
    justify-content: space-around;
    flex-wrap: nowrap;
  }
`;
 
export default BetterForBody;
