import React, { useState } from "react";
import CenterGrid from "../components/Center/CenterGrid";
import CenterMap from "../components/Center/CenterMap";
import CenterText from "../components/Center/CenterText";
import swit from "../components/Photos/swit.jpg";
import cari from "../components/Photos/cari.webp";
import france from "../components/Photos/france.jpg";
import { CenterTexts, CenterTitle } from "../components/Data/CenterData";
function Center() {
  const [DataTexts, setCenterTexts] = useState(CenterTexts);
  const [DataTitle, setCenterTitle] = useState(CenterTitle);

  return (
    <div className="center">
      <CenterText dataTexts={DataTexts} dataTitle={DataTitle} />
      <CenterGrid item={swit} item1={cari} item2={france} />
      <CenterMap />
    </div>
  );
}

export default Center;
