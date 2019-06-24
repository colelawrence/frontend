/// <reference path="./Theme.d.ts" >

import { BrandColors } from "./BrandColors"

/**
 * Night theme
 * @type {ColorTheme}
 */
const NightColorTheme = {
  Background: "#04172B",
  BackgroundDim: "#162636",
  BackgroundHighlight: "#253E57",

  InvertBackground: "#04172B",
  InvertText: "#F0EDE3",

  Divider: "rgba(183, 179, 173, 0.3)",

  Text: "#F0EDE3",
  TextDim: "#A7A7A7",

  TextRed: BrandColors.BrightRed,
  TextYellow: BrandColors.BrightYellow,
  TextBlue: BrandColors.BrightBlue,
  TextGreen: BrandColors.BrightGreen,

  BackgroundRed: BrandColors.DarkRed,
  BackgroundYellow: BrandColors.DarkYellow,
  BackgroundBlue: BrandColors.DarkBlue,
  BackgroundGreen: BrandColors.DarkGreen,
}

export default NightColorTheme
