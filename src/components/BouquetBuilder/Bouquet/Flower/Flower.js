import React, { memo } from "react";
import classes from "./Flower.module.css";

export default memo(({ type }) => {
  const flowersClasses = [classes.flowers, classes[type]];

  let stylePos = null;
  let rotation = 10;
  let rx = 190;
  let ry = 100;
  let cx = 80;
  let cy = 60;

  const getPosition = (px, py) => {
    let cos = Math.cos(rotation),
      sin = Math.sin(rotation);
    let dx = px - cx,
      dy = py - cy;
    let tdx = Math.floor(Math.random() * cos * dx + sin * dy),
      tdy = Math.floor(Math.random() * sin * dx - cos * dy);

    return (tdx * tdx) / (rx * rx) + (tdy * tdy) / (ry * ry) <= 1;
  };

  switch (type) {
    case "roses":
      flowersClasses.push(classes.roses);
      break;
    case "jasmine":
      flowersClasses.push(classes.jasmine);
      break;
    case "daisies":
      flowersClasses.push(classes.daisies);
      break;
    case "lilies":
      flowersClasses.push(classes.lilies);
      break;
    case "irises":
      flowersClasses.push(classes.irises);
      break;
    case "liliesOfTheValley":
    default:
      flowersClasses.push(classes.liliesOfTheValley);
      break;
  }

  const position = getPosition(50 / 2);

  stylePos = {
    position: "absolute",
    top: position.y + "px",
    left: position.x + "px",
    width: 40 + "px",
    height: 38 + "px",
    transform: "rotate(" + Math.random() * 45 + "deg" + ")",
  };

  return <div style={stylePos} className={flowersClasses.join(" ")}></div>;
});
