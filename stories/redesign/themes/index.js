import DayColors from "./DayColorTheme"
import NightColors from "./NightColorTheme"

import { QriTypography } from "./QriTypography"
import { QriSizes } from "./QriSizes"
import { BrandFonts } from "./BrandFonts"

/** @type {Theme} */
const Day = {
  Fonts: BrandFonts,
  Colors: DayColors,
  Type: QriTypography,
  Sizes: QriSizes,
}

/** @type {Theme} */
const Night = {
  Fonts: BrandFonts,
  Colors: NightColors,
  Type: QriTypography,
  Sizes: QriSizes,
}

export { Day, Night }
