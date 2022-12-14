import React from "react";

function CenterMap() {
  return (
    <div className="center-map" id="map">
      <iframe
        src={
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14680.550993015991!2d72.5607644!3d23.0920528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830ede7560fb%3A0xc887d54ce9cf98e6!2sNew%20Ranip%2C%20Ahmedabad%2C%20Gujarat%20380081!5e0!3m2!1sen!2sin!4v1669985252939!5m2!1sen!2sin"
        }
        width={"100%"}
        height={"100%"}
        style={{ borderRadius: "20px" }}
        loading={"lazy"}
        referrerPolicy={"no-referrer-when-downgrade"}
      ></iframe>
    </div>
  );
}

export default CenterMap;
