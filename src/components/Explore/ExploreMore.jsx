import React from "react";

function ExploreMore({ data1, data2, data3 }) {
  const styleObj = {
    fontSize: "25px",
  };
  return (
    <div className="explore-more">
      <div className="explore-nav">
        <div className="person-img">
          <b
            id="person"
            className="glyphicon glyphicon-user"
            style={styleObj}
          ></b>
        </div>
        <div className="text1">{data1.title}</div>
        <div className="text2">{data1.data}</div>
      </div>
      <div className="explore-nav1">
        <div className="world-img">
          <b className="glyphicon glyphicon-globe" id="world"></b>
        </div>
        <div className="text3">{data2.title}</div>
        <div className="text4">{data2.data}</div>
      </div>
      <div className="explore-nav2">
        <div className="home-img">
          <b id="home" className="glyphicon glyphicon-home"></b>
        </div>
        <div className="text5"> {data3.title}</div>
        <div className="text6">{data3.data}</div>
      </div>
      <div className="explore-button">
        <button className="b2">Explore More</button>
      </div>
    </div>
  );
}

export default ExploreMore;
