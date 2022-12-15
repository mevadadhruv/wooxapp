import React from "react";
import ExploreLine from "../components/Explore/ExploreLine";
import ExploreMore from "../components/Explore/ExploreMore";
import ExploreText from "../components/Explore/ExploreText";
function Explore() {
  return (
    <div className="explore">
      <ExploreText />
      <ExploreMore />
      <ExploreLine />
    </div>
  );
}

export default Explore;
