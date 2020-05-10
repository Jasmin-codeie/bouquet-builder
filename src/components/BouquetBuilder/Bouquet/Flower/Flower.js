import React, { memo } from "react";
import classes from "./Flower.module.css";

export default memo(({ type }) => {
  const flowersClasses = [classes.flowers, classes[type]];

  let stylePos = null;
  const getPosition = (ir) => {
    const pd = 190;
    const pr = pd / 2;

    const ix = Math.round(Math.random() * pd);
    const iy = Math.round(Math.random() * pd);

    const distance =
      Math.sqrt(Math.pow(ix - pr, 2) + Math.pow(iy - pr, 2)) + ir;

    return distance < pr ? { x: ix - ir, y: iy - ir } : getPosition(ir);
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

  const position = getPosition(35 / 2);

  stylePos = {
    position: "absolute",
    top: position.y + "px",
    left: position.x + "px",
    width: 40 + "px",
    height: 38 + "px",
  };

  return <div style={stylePos} className={flowersClasses.join(" ")}></div>;
});
