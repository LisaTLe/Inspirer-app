import React from "react";
import "../App.css";
const axios = require("axios");

// export const ColormindAPI = () => {
//   const url = "http://colormind.io/api/";
//   const data = {
//     model: "default",
//       input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"],
//   };

//   const http = new XMLHttpRequest();

//   http.onreadystatechange = function () {
//     if (http.readyState == 4 && http.status == 200) {
//       const palette = JSON.parse(http.responseText).result;
//       console.log(palette);
//     }
//   };

//   http.open("POST", url, true);
//   http.send(JSON.stringify(data));

export const Colormind = () => {
  const colors = async (
    input = ["N", "N", "N", "N", "N"],
    model = "default"
  ) => {
    const apiResponse = await axios({
      url: "http://colormind.io/api/",
      method: "post",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      data: {
        model,
        input,
      },
    });
    return apiResponse.data.result;
  };

  return (
    <div>
      <h3> Generate Your Color Pallete Now: </h3>
      {colors}
    </div>
  );
};

export default Colormind;
