const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

const POSITION_X = 0;
const POSITION_Y = 0;

const BOX = 32;

const KEYCODE_RIGHT = 37;
const KEYCODE_DOWN = 38;
const KEYCODE_LEFT = 39;
const KEYCODE_UP = 40;

let snake = [{ x: 8 * BOX, y: 8 * BOX }];

let direction = "right";

function backgroundCreate() {
  context.fillStyle = "#00263b";
  context.fillRect(POSITION_X, POSITION_Y, 16 * BOX, 16 * BOX);
}

function snakeCreate() {
  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = "#8ec6c5";
    context.fillRect(snake[i].x, snake[i].y, BOX, BOX);
  }
}

document.addEventListener("keydown", updateDirection);

function updateDirection(event) {
  if (event.keyCode === KEYCODE_RIGHT && direction !== "right") {
    direction = "left";
  }
  if (event.keyCode === KEYCODE_DOWN && direction !== "down") {
    direction = "up";
  }
  if (event.keyCode === KEYCODE_LEFT && direction !== "left") {
    direction = "right";
  }
  if (event.keyCode === KEYCODE_UP && direction !== "up") {
    direction = "down";
  }
  console.log(direction);
}

function startGame() {
  if (snake[0].x > 15 * BOX && direction === "right") {
    snake[0].x = 0;
  }
  if (snake[0].x < 0 && direction === "left") {
    snake[0].x = 16 * BOX;
  }
  if (snake[0].y > 15 * BOX && direction === "down") {
    snake[0].y = 0;
  }
  if (snake[0].y < 0 && direction === "up") {
    snake[0].y = 16 * BOX;
  }

  backgroundCreate();
  snakeCreate();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === "right") snakeX += BOX;
  if (direction === "left") snakeX -= BOX;
  if (direction === "up") snakeY -= BOX;
  if (direction === "down") snakeY += BOX;

  snake.pop();
  let newHead = { x: snakeX, y: snakeY };
  snake.unshift(newHead);
}

let game = setInterval(startGame, 100);
