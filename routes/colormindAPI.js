const url = "http://colormind.io/api/";
const data = {
  model: "default",
  //   input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"],
};

const http = new XMLHttpRequest();

http.onreadystatechange = function () {
  if (http.readyState == 4 && http.status == 200) {
    const palette = JSON.parse(http.responseText).result;
  }
};

http.open("POST", url, true);
http.send(JSON.stringify(data));
