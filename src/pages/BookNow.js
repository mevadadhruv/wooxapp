import React from "react";

function BookNow({ dataText }) {
  return (
    <div className="book-now">
      <div className="book-image">
        <div className="book-text">
          <h1>
            {dataText.text1}
            <h3>{dataText.text2}</h3>
          </h1>
        </div>
        <div className="book-button">
          <button className="b3">Book Your Now</button>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
