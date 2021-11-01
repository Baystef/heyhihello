import React from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../../theme'

interface IProps { }

export default function Layout(props: React.PropsWithChildren<IProps>) {

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" href="/fonts/domaine-display-narrow-web-medium.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/domaine-display-narrow-web-regular-italic.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Garnett-Medium.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/Garnett-Regular.woff2" as="font" crossOrigin="" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          {props.children}
        </Wrapper>
      </ThemeProvider>
    </div>
  )
}

const Wrapper = styled.div`
  
`;
