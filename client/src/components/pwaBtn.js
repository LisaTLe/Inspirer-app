import React from "react";
import Install from "./install";


export default function pwaBtn() {
  return (
    <div className="pwa-btn">
      <div className="wrapper">
        <div className="right">
          <a href="#install" className="btn" id="buttonInstall" role="button">
            Install!
          </a>
        </div>
      </div>
    </div>
  );
}
