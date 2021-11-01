import { FC } from "react";
import styled from 'styled-components';
import Image from 'next/image';
import { breakpoint } from "../../theme";

import Jude from '../images/jude-logo.png';

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = () => {
  return (
    <Wrapper>
      <NavTop>
        <i className="fas fa-phone-alt"></i> &nbsp; Not sure? Call us on  01202 513897
      </NavTop>
      <NavBottom>
        <Image src={Jude} width={99.42} height={30.18} priority />
      </NavBottom>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: var(--mobilenavbar-height);
  z-index: 99999;
  @media (min-width: ${breakpoint.screenSMmin}) {
    height: var(--navbar-height);
  }
`;

const NavTop = styled.div`
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.tertiaryColor};
  font-size: 0.875rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.75rem;
  padding: 0.5rem 0;
`;

const NavBottom = styled.div`
  background: ${({ theme }) => theme.tertiaryColor};
  height: 3.75rem;
  padding: 0.5rem;
  display: grid;
  align-items: center;
  justify-content: center;
  @media (min-width: ${breakpoint.screenSMmin}) {
    justify-content: start;
    padding: 1.5rem;
    height: 5.15rem;
  }
`;

export default NavBar;
