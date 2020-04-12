import React from 'react';
import classes from "./Flower.module.css"

export default ({ type }) => {
    const flowerClasses = [classes.Flower, classes[type]];
  
    return <div className={flowerClasses.join(" ")}></div>;
  };