import React, { useEffect, useState } from "react";
import Map from "./map/map";
import { getRandomInteger } from "./utils/calculation";

export default function Snake() {
  const [gameStatus, setGameStatus] = useState("pause");
  const [direction, setDirection] = useState("right");
  const [snakeBody, setSnakeBody] = useState([]);

  const [mapHeight, setMapHeight] = useState(10);
  const [mapWidth, setMapWidth] = useState(10);

  useEffect(() => {
    let functionPlay;
    switch ("play") {
      case value:
        break;

      default:
        break;
    }
    let head = [getRandomInteger(0, mapHeight)];
    return () => {
      clearInterval();
    };
  }, [gameStatus]);

  return (
    <div className="snake-game">
      {/* <h1>Snake game</h1> */}
      <Map height={mapHeight} width={mapWidth} snakeBody={snakeBody} />
      <h1>Оноо:</h1>
    </div>
  );
}
