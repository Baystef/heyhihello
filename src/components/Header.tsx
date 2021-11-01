import { FC } from "react";
import styled from 'styled-components';
import { breakpoint } from '../../theme';

import FreeDelivery from '../images/Icons/free-delivery.svg';
import ApprovedByDoctors from '../images/Icons/approved-by-doctors.svg';
import WithRealWomen from '../images/Icons/with-real-women.svg';
import PlanetFriendly from '../images/Icons/planet-friendly.svg';


const Header: FC = () => {
  return (
    <Wrapper>
      <HeaderTextWrapper data-aos="fade-up">
        <HeaderPrimary>Bladder care, we’re
          talking about it</HeaderPrimary>
        <HeaderSecondary>Clinically proven (and community tested) essentials for life’s trickly moments.</HeaderSecondary>
        <HeaderButton>Try our trial kit</HeaderButton>
      </HeaderTextWrapper>
      <HeaderFooterMobile>
        <HeaderFooterChild>
          <FreeDelivery /> Free discreet delivery
        </HeaderFooterChild>
      </HeaderFooterMobile>
    
      <HeaderFooter>
        <HeaderFooterChild>
          <FreeDelivery /> Free discreet delivery
        </HeaderFooterChild>
        <HeaderFooterChild>
          <ApprovedByDoctors /> Approced by doctors
        </HeaderFooterChild>
        <HeaderFooterChild>
          <WithRealWomen /> Co-created with real women
        </HeaderFooterChild>
        <HeaderFooterChild>
          <PlanetFriendly /> Planet friendly
        </HeaderFooterChild>
      </HeaderFooter>
    </Wrapper>
  );
}

const Wrapper = styled.header`
 background-image: url('/images/mobileHeader.png');
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 position: relative;
 
 display: grid;
 place-items: center;

 width: 100%;
 margin-top: var(--mobilenavbar-height);
 height: calc(100vh - var(--mobilenavbar-height));
 text-align: center;
 
  @media (min-width: ${breakpoint.screenSMmin}) {
    background-image: url('/images/desktopHeader.png');
    margin-top: var(--navbar-height);
    height: calc(100vh - var(--navbar-height));
  }
`;

export const HeaderTextWrapper = styled.div`
  width: 85%;

  @media (min-width: ${breakpoint.screenSMmin}) {
    padding-left: 4rem;
    padding-right: 4rem;
    width: 55%;
    margin: auto;
  }
`;

export const HeaderPrimary = styled.p`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 38px;
  @media (min-width: ${breakpoint.screenSMmin}) {
    font-size: 5.3125rem;
    line-height: 80.75px;
  }
`;

export const HeaderSecondary = styled.p`
  font-family: ${({ theme }) => theme.secondaryFont};
  font-size: 1rem;
  line-height: 25.6px;
  @media (min-width: ${breakpoint.screenSMmin}) {
    padding-left: 8rem;
    padding-right: 8rem;
    font-size: 1.375rem;
    line-height: 35.2px;
  }
`;

export const HeaderButton = styled.button`
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.tertiaryColor};
  font-family: ${({ theme }) => theme.secondaryFontMedium};
  font-size: 1.125rem;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  cursor: pointer;

  @media (min-width: ${breakpoint.screenSMmin}) {
   padding: 0.5rem 3rem;
  }
`;

const HeaderFooter = styled.div`
  display: none;
  align-items: center;
  justify-content: space-around;

  background: ${({ theme }) => theme.secondaryColor};
  padding: 0 2rem;
  border-bottom: 1px solid #dbdbe7;
  height: 3.75rem;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  @media (min-width: ${breakpoint.screenSMmin}) {
   display: flex;
  }
`;

const HeaderFooterMobile = styled(HeaderFooter)`
  display: flex;
  justify-content: center;

  @media (min-width: ${breakpoint.screenSMmin}) {
   display: none;
  }
`;

export const HeaderFooterChild = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.secondaryFontMedium};
  font-size: 0.875rem;
`;

export default Header;
