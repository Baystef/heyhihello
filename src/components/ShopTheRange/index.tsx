import { FC } from "react";
import TheRange from "../common/TheRange";

import { RangeData } from "./data";


const ShopTheRange: FC = () => {
  return (
    <TheRange
      title="Shop the Jude range"
      RangeData={RangeData}
    />
  );
}

export default ShopTheRange;
