import React from 'react';
import classes from "./Modal.module.css";

export default ({ children, show }) => {
 const style = {};
 if (show){
   style.opacity = 1;
   style.left = 'auto';
 }
 else{
  style.opacity = 0;
  style.left = '=100vw';
 }

  return(
    <div className={classes.Modal} style={style}>
      {children}
      </div>
  );
};
