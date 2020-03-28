import React from 'react';
import classes from "./BouquetBuilder.module.css"
import Bouquet from "../../components/BouquetBuilder/Bouquet/Bouquet";

export default () => (
    <div className={classes.BouquetBuilder}>
        <Bouquet />
        BouquetControls
    </div>
);