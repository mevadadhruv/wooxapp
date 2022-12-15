import React from "react";

function Footer({ footerTextData }) {
  return (
    <div className="footer">
      <p className="footer1">{footerTextData.text}</p>
    </div>
  );
}

export default Footer;
