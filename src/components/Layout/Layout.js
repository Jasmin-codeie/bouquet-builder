import React from 'react';
import Toolbar from "./Toolbar/Toolbar";
import Drawer from "./Drawer/Drawer";

export default ({children}) => (
    <div className="Layout"> 
    <Toolbar />
    <Drawer />
    {children}
    </div>
);