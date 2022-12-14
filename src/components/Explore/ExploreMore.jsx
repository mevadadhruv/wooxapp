import React from "react";

function ExploreMore() {
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
        <div className="text1">Population</div>
        <div className="text2">8.66M</div>
      </div>
      <div className="explore-nav1">
        <div className="world-img">
          <b className="glyphicon glyphicon-globe" id="world"></b>
        </div>
        <div className="text3">Terrlitory</div>
        <div className="text4">
          41.290km<i>2</i>
        </div>
      </div>
      <div className="explore-nav2">
        <div className="home-img">
          <b id="home" className="glyphicon glyphicon-home"></b>
        </div>
        <div className="text5">AVG Price</div>
        <div className="text6">$1,100,200</div>
      </div>
      <div className="explore-button">
        <button className="b2">Explore More</button>
      </div>
    </div>
  );
}

export default ExploreMore;
