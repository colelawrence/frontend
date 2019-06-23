import DayColors from './DayColorTheme'
import NightColors from './NightColorTheme'

import QriTypeTheme from './QriTypeTheme'

/** @type {Theme} */
const Day = {
    Colors: DayColors,
    Type: QriTypeTheme,
}

/** @type {Theme} */
const Night = {
    Colors: NightColors,
    Type: QriTypeTheme,
}

export { typeToStyle } from './typeToStyle'

export {
    Day,
    Night,
}