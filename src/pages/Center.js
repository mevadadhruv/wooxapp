import React from "react";
import CenterGrid from "../components/Center/CenterGrid";
import CenterMap from "../components/Center/CenterMap";
import CenterText from "../components/Center/CenterText";
import swit from "../components/Photos/swit.jpg";
import cari from "../components/Photos/cari.webp";
import france from "../components/Photos/france.jpg";

function Center() {
  return (
    <div className="center">
      <CenterText />
      <CenterGrid item={swit} item1={cari} item2={france} />
      <CenterMap />
    </div>
  );
}

export default Center;
