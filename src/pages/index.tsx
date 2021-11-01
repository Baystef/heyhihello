import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import ShopTheRange from '../components/ShopTheRange';
import BladderBoost from '../components/BladderBoost';
import ThinnerPads from '../components/ThinnerPads';
import BetterForBody from '../components/BetterForBody';
import ExploreTheRange from '../components/ExploreTheRange';
import JoinOurCommunity from '../components/JoinOurCommunity';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <Wrapper>
      <NavBar />
      <Header />
      <ShopTheRange />
      <BladderBoost />
      <ThinnerPads />
      <BetterForBody />
      <ExploreTheRange />
      <JoinOurCommunity />
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`

`;