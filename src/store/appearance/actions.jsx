import { _setCurrentAccount } from ".";
import store from "..";
import { _setBackgroundColor, _setColor } from "../auth";

export const setBackgroundColor =data=> store.dispatch(_setBackgroundColor(data))
export const setColor =(data)=> store.dispatch(_setColor(data))
export const setFontSize=(data)=> store.dispatch(_setFontSize(data))