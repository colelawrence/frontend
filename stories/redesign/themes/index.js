import DayColors from "./DayColorTheme";
import NightColors from "./NightColorTheme";

import QriTypeTheme from "./QriTypeTheme";
import { QriSizes } from "./QriSizes";

/** @type {Theme} */
const Day = {
  Colors: DayColors,
  Type: QriTypeTheme,
  Sizes: QriSizes,
};

/** @type {Theme} */
const Night = {
  Colors: NightColors,
  Type: QriTypeTheme,
  Sizes: QriSizes,
};

export { typeToStyle } from "./typeToStyle";

export { Day, Night };
