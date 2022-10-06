import React from "react";
import "../App.css";

export const ColormindAPI = () => {
  const url = "http://colormind.io/api/";
  const data = {
    model: "default",
    //   input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"],
  };

  const http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      const palette = JSON.parse(http.responseText).result;
      console.log(palette);
    }
  };

  http.open("POST", url, true);
  http.send(JSON.stringify(data));

  // const colormind = require("colormind-magic-palette");

  // const main = async () => {
  //   const palette = await colormind.random();
  //   console.log(palette);
  // };

  // main();
};

return(
  <div>
    
  </div>
)
