import React from "react";

function GridBox2({ item, gridTexts, dataDirection }) {
  return (
    <div className="grid-box2">
      <div className="grid-image">
        <img
          src={item}
          alt="cari"
          style={{ borderRadius: "10%" }}
          height="100%"
          width="100%"
        />
      </div>
      <div className="grid-country">
        <b className="country-name">CARIBBEAN</b>
        <p className="country-text">North America</p>
      </div>

      <div className="grid-text">
        <p>{gridTexts.data}</p>
      </div>
      <div className="grid-icon">
        <b
          className="glyphicon glyphicon-user"
          style={{
            fontSize: "16px",
          }}
        ></b>
        &nbsp;&nbsp;&nbsp;8.66 Mil People
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b
          className="glyphicon glyphicon-globe"
          style={{
            fontSize: "16px",
          }}
        ></b>
        &nbsp;&nbsp;&nbsp;41,290 km<i>2</i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b
          className="glyphicon glyphicon-home"
          style={{
            fontSize: "16px",
          }}
        ></b>
        &nbsp;&nbsp;&nbsp;$1,100,200
      </div>

      <div className="grid-direction">
        <b> {dataDirection.data}</b>
      </div>

      <div className="grid-button">
        <button className="b2">Explore More</button>
      </div>
    </div>
  );
}

export default GridBox2;
