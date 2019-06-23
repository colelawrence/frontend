/// <reference path="./Theme.d.ts" >

import { BrandColors } from "./BrandColors";

/**
 * Day theme
 * @type {ColorTheme}
 */
const DayColorTheme = {
    Background: '#FFFFFF',
    BackgroundDim: '#F3F2F1',
    BackgroundHighlight: '#D2F4FF',
    Divider: 'rgba(183, 179, 173, 0.3)',

    InvertBackground: '#253E57',
    InvertText: '#FFFFFF',

    Text: '#131314',
    TextDim: '#726E62',

    TextRed: BrandColors.DarkRed,
    TextYellow: BrandColors.DarkYellow,
    TextBlue: BrandColors.DarkBlue,
    TextGreen: BrandColors.DarkGreen,

    BackgroundRed: BrandColors.BrightRed,
    BackgroundYellow: BrandColors.BrightYellow,
    BackgroundBlue: BrandColors.BrightBlue,
    BackgroundGreen: BrandColors.BrightGreen,
}

export default DayColorTheme