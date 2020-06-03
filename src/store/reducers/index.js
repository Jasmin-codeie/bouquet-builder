import { combineReducers } from "redux";
import builder from "./builder";
import orders from "./orders";
import autho from "./autho";

export default combineReducers({ builder, orders, autho });
