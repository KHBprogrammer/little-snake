export function calcNextPostion({ height, width, direction, head }) {
  function portalCalculate(row, column) {
    return [row >= 0 && row < width ? (row < 0 ? row - 1 : 0) : column, column >= 0 && column < height ? (column < 0 ? column - 1 : 0) : column];
  }
  switch (direction) {
    case "up":
      positionParse(portalCalculate(head[0], head[1] + 1));
      break;

    case "right":
      positionParse(portalCalculate(head[0] + 1, head[1]));
      break;

    case "down":
      positionParse(portalCalculate(head[0], head[1] - 1));
      break;

    default:
      positionParse(portalCalculate(head[0] - 1, head[1]));
      break;
  }
}

export function positionParse(position) {
  if (typeof position === "number") return [Math.floor(position / 100), position % 100];
  return position[0] * 100 + position[1];
}

export function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
