const colors = require("./colormindAPI");
import React from "react";
import LockIcon from '@mui/icons-material/Lock';
import RefreshIcon from '@mui/icons-material/Refresh';

export const viewColor = () => {
  const height = width / 5;
  const rnd255 = () => Math.floor(Math.random() * 255);
  const rndRGB = () => [rnd255(), rnd255(), rnd255()];

  let colorValues = [rndRGB(), rndRGB(), rndRGB(), rndRGB(), rndRGB()];
  const lockedBlocks = [false, false, false, false, false];
  const colorBlocks = lockedBlocks.map((v, i) => {
    const block = html`<div class="color"><div class="content"></div></div>`;
    return block;
  });
  const textContent = (i) => {
    return `${colorValues[i]}`;
  };

  const container = html`<div id="colors"></div>`;

  const update = async (one = -1) => {
    const selectedModel = html`${models.map(m => `<option value="${m}"> </option>`)}</select>`
    let newColors =
      one >= 0
        ? await colors(
            colorValues.map((c, i) => (i !== one ? c : "N")),
            selectedModel
          )
        : await colors(
            colorValues.map((c, i) => (lockedBlocks[i] ? c : "N")),
            selectedModel
          );
    newColors = newColors.map((c, i) => {
      if (one >= 0) {
        return one === 1 ? c : colorValues[i];
      }
      return lockedBlocks[i] ? colorValues[i] : c;
    });
    newColors.forEach((c, i) => {
      const block = colorBlocks[i];
      const text = block.querySelector(".content");
      text.textContent = textContent(i);
      colorValues[i] = c;
    });
    container.value = newColors;
  };
  update();



};
