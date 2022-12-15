import React from "react";

function CenterText({ dataTexts, dataTitle }) {
  return (
    <div className="center-text">
      <h1 className="text-h1">
        <b>{dataTitle.data}</b>
      </h1>
      <p className="text-p">{dataTexts.data}</p>
    </div>
  );
}

export default CenterText;
