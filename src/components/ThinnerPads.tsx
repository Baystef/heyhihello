import { FC } from "react";

import { BoostSection, StatContainer, Stat, StatContent } from "./common";

const ThinnerPads: FC = () => {
  return ( 
    <BoostSection
    title="Thinner, comfier, drier pads"
    para="Developed with a team of doctors and over 500 women, our Everyday Pads have been tested and tweaked until they’re better than any others:"
    btnText="Shop pads"
    secondary
  >
    <StatContainer>
      <Stat style={{ borderRight: '1px solid #ff6443' }}>
        <StatContent><span>2.5x%</span></StatContent>
        <small>softer</small>
      </Stat>
      <Stat style={{ borderRight: '1px solid #ff6443' }}>
        <StatContent><span>6.5x</span></StatContent>
        <small>drier</small>
      </Stat>
      <Stat>
        <StatContent><span>4.0x</span></StatContent>
        <small>comfier</small>
      </Stat>
    </StatContainer>
  </BoostSection>
   );
}
 
export default ThinnerPads;