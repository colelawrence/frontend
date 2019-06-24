/// <reference path="./themes/Theme.d.ts">
import { Day } from "./themes";
import * as React from "react";

export const ThemeContext = React.createContext(Day);

/** @param {(theme: Theme) => JSX.Element} fn */
export function getTheme(fn) {
  return <ThemeContext.Consumer>{fn}</ThemeContext.Consumer>;
}
