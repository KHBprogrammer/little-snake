import React, { useEffect, useState } from "react";

export default function Map({ mapData, height = 10, width = 10, snakeBody = [0] }) {
  const [map, setMap] = useState([]);

  const [widtColumnStyle, setWidtColumnStyle] = useState("");
  useEffect(() => {
    let mapArray = [];

    let widthStyle = "";
    for (let index2 = 0; index2 < width; index2++) {
      widthStyle += "auto ";
    }

    for (let index = 0; index < height; index++) {
      for (let index2 = 0; index2 < width; index2++) {
        mapArray.push(index * 100 + index2);
      }
    }
    setMap(mapArray);
    setWidtColumnStyle(widthStyle);
  }, [width, height]);

  return (
    <div className="map" style={{ gridTemplateColumns: widtColumnStyle }}>
      {map.map((item) => (
        <div key={item} className={snakeBody.indexOf(item) !== -1 ? (snakeBody.indexOf(item) === 0 ? "snake-head" : "snake-body") : ""}></div>
      ))}
    </div>
  );
}
