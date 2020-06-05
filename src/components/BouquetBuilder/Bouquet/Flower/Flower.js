import React, { memo } from "react";
import classes from "./Flower.module.css";

export default memo(({ type }) => {
  const flowersClasses = [classes.flowers, classes[type]];

  let stylePos = null;
  let ellipse = {
    width: 220, // a, b - semi-axis of an ellipse
    height: 140,
  };

  const getPosition = () => {
    let randomPos = {
      x: Math.floor(Math.random() * ellipse.width),
      y: Math.floor(Math.random() * ellipse.height),
    };
    let result =
      randomPos.x ** 2 / ellipse.width ** 2 +
        randomPos.y ** 2 / ellipse.height ** 2 <
      1;

    if (result) {
      return randomPos;
    } else return getPosition();
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
    case "orchids":
      flowersClasses.push(classes.orchids);
      break;
    case "liliesOfTheValley":
    default:
      flowersClasses.push(classes.liliesOfTheValley);
      break;
  }

  const position = getPosition(440 / 2);

  stylePos = {
    position: "absolute",
    top: position.y + "px",
    left: position.x + "px",
    transform: "rotate(" + Math.random() * 45 + "deg)",
  };

  return <div style={stylePos} className={flowersClasses.join(" ")}></div>;
});
