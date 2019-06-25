const codeFamily = w => ({
  fontFamily: ['"Source Code Pro"', "monospace"].join(","),
  fontWeight: w,
})
const sansFamily = w => ({
  fontFamily: ['"Open Sans"', "system-ui"].join(","),
  fontWeight: w,
})

/** @type {FontTheme} */
export const BrandFonts = {
  CodeFont: {
    Light: codeFamily(200),
    Normal: codeFamily(400),
    Medium: codeFamily(500),
    Semibold: codeFamily(500),
    Bold: codeFamily(700),
    Ultra: codeFamily(900),
  },
  HeadingFont: {
    Light: sansFamily(200),
    Normal: sansFamily(400),
    Medium: sansFamily(500),
    Semibold: sansFamily(600),
    Bold: sansFamily(700),
    Ultra: sansFamily(900),
  },
  BodyFont: {
    Light: sansFamily(200),
    Normal: sansFamily(400),
    Medium: sansFamily(500),
    Semibold: sansFamily(600),
    Bold: sansFamily(700),
    Ultra: sansFamily(900),
  },
}
