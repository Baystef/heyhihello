import { createGlobalStyle } from "styled-components"
import { normalize } from 'styled-normalize'

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    primaryRadius: string;
    secondaryRadius: string;
    textColor: string;
    primaryFont: string;
    primaryFontItalic: string;
    secondaryFont: string;
    secondaryFontMedium: string;
  }
}

export const theme = {
  primaryColor: '#FF542F',
  secondaryColor: '#E3E3F1',
  tertiaryColor: '#FAF8F5',
  primaryRadius: '8px',
  secondaryRadius: '10px',
  textColor: '#141835',
  primaryFont: 'Domain, Tahoma, Helvetica, Arial, Roboto, sans-serif',
  primaryFontItalic: 'Domain-it, Tahoma, Helvetica, Arial, Roboto, sans-serif',
  secondaryFont: 'Garnett-Reg, Tahoma, Helvetica, Arial, Roboto, sans-serif',
  secondaryFontMedium: 'Garnett, Tahoma, Helvetica, Arial, Roboto, sans-serif'
}

export const breakpoint = {
  screenXSmin: '0px',
  screenSMmin: '576px',
  screenMDmin: '768px',
};


export const GlobalStyles = createGlobalStyle`
 :root {
   --navbar-height: calc(2.75rem + 5.15rem);
   --mobilenavbar-height: calc(2.75rem + 3.75rem);
 }

${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
  } 

  body {
    background: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.primaryFont};
    transition: all 0.50s linear;
  }
`