import React, { useState } from "react";
import GridBox1 from "./GridBoxs/GridBox1";
import GridBox2 from "./GridBoxs/GridBox2";
import GridBox3 from "./GridBoxs/GridBox3";
import GridScroll from "./GridBoxs/GridScroll";
import { Direction, GridTexts } from "../Data/CenterData";

function CenterGrid({ item, item1, item2 }) {
  const [dataTexts, setGridTexts] = useState(GridTexts);
  const [dataDirection, setDirection] = useState(Direction);

  return (
    <div className="center-grid">
      <GridBox1
        item={item}
        gridTexts={dataTexts}
        dataDirection={dataDirection}
      />
      <GridBox2
        item={item1}
        gridTexts={dataTexts}
        dataDirection={dataDirection}
      />
      <GridBox3
        item={item2}
        gridTexts={dataTexts}
        dataDirection={dataDirection}
      />
      <GridScroll />
    </div>
  );
}

export default CenterGrid;
