import React from 'react';
import classes from "./BouquetBuilder.module.css"
import BouquetKit from "../../components/BouquetBuilder/BouquetKit/BouquetKit";

export default () => (
    <div className={classes.BouquetBuilder}>
        <BouquetKit />
        BouquetControls
    </div>
);