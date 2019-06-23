import { types } from 'typestyle'

/**
 * @param {FontStyle} type
 * @returns {types.CSSProperties}
 */
export function typeToStyle(type) {
    return {
        fontFamily: type.Family.join(', '),
        fontWeight: type.Weight,
        fontSize: type.Size,
        lineHeight: type.LineHeight,
        fontStyle: type.Style || 'normal',
        letterSpacing: type.LetterSpacing || 'normal',
        textDecoration: type.Decoration || 'none',
        textTransform: type.Transform || 'none',
    }
}
