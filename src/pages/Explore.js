import React, { useState } from "react";
import {
  ExploreMoreData1,
  ExploreMoreData2,
  ExploreMoreData3,
  ExploreNumbers,
} from "../components/Data/ExploreMoreData";

import ExploreMore from "../components/Explore/ExploreMore";
import ExploreText from "../components/Explore/ExploreText";
import ExploreLine from "../components/Explore/ExploreLine";
function Explore() {
  const [Data1, setExploreMoreData1] = useState(ExploreMoreData1);
  const [Data2, setExploreMoreData2] = useState(ExploreMoreData2);
  const [Data3, setExploreMoreData3] = useState(ExploreMoreData3);
  // ExploreNumbers
  const [DataNumbers, setExploreNumbers] = useState(ExploreNumbers);
  return (
    <div className="explore">
      <ExploreText />
      <ExploreMore data1={Data1} data2={Data2} data3={Data3} />
      <ExploreLine item={DataNumbers} />
    </div>
  );
}

export default Explore;
