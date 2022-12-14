import React from "react";
import GridBox1 from "./GridBoxs/GridBox1";
import GridBox2 from "./GridBoxs/GridBox2";
import GridBox3 from "./GridBoxs/GridBox3";
import GridScroll from "./GridBoxs/GridScroll";
function CenterGrid({ item, item1, item2 }) {
  return (
    <div className="center-grid">
      <GridBox1 item={item} />
      <GridBox2 item={item1} />
      <GridBox3 item={item2} />
      <GridScroll />
    </div>
  );
}

export default CenterGrid;
