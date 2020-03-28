import React from 'react';
import classes from "./Bouquet.module.css";
import Flower from "./Flower/Flower";

export default () => (
    <div className={classes.Bouquet}>
        <Flower />
    </div>
);