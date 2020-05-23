const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

const BOX = 32;
const POSITION_X = 0;
const POSITION_Y = 0;

function backgroundCreate() {
  context.fillStyle = "#00263b";
  context.fillRect(POSITION_X, POSITION_Y, 16 * BOX, 16 * BOX);
}

backgroundCreate();
