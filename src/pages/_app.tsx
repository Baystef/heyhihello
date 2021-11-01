import '../styles/main.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: 'ease',
    });
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
