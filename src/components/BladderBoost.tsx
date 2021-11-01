import { FC } from "react";

import { BoostSection, StatContainer, Stat, StatContent } from "./common";

import Leaks from '../images/Icons/leaks.svg';
import Wees from '../images/Icons/wees.svg';


const BladderBoost: FC = () => {
  return (
    <BoostSection
      title="Give your bladder a boost"
      para="Who said leaking was something you have to live with? Our plant-based supplements are clinically tested and proven to improve bladder strength:"
      btnText="Shop supplements"
    >
      <StatContainer>
        <Stat style={{ borderRight: '1px solid #e9e7e7' }}>
          <StatContent><Leaks /> <span>79%</span></StatContent>
          <small>less daily leaks</small>
        </Stat>
        <Stat>
          <StatContent><Wees /> <span>53%</span></StatContent>
          <small>less night wees</small>
        </Stat>
      </StatContainer>
    </BoostSection>
  );
}

export default BladderBoost;
