declare type TypographyStyle = {
  fontFamily: string
  /** Usually: Normal: 400; Semibold: 600; Bold: 700; ExtraBold: 800; Black/Ultra: 900 */
  fontWeight: number
  fontSize: string
  lineHeight: string
  fontStyle?: null | "normal" | "italic"
  letterSpacing?: null | string
  textDecoration?: null | "underline"
  textTransform?: null | "uppercase"
}

declare type TypographyTheme = {
  Heading1: TypographyStyle
  Heading2: TypographyStyle
  Heading3: TypographyStyle
  Heading1Mobile: TypographyStyle
  Heading4: TypographyStyle
  NormalText: TypographyStyle
  NormalTextSemibold: TypographyStyle
  /** Activated normal text -- bolded */
  NormalTextActive: TypographyStyle
  MediumText: TypographyStyle
  MediumTextSemibold: TypographyStyle
  LargeText: TypographyStyle
  LargeTextSemibold: TypographyStyle
  SmallText: TypographyStyle
  SmallTextSemibold: TypographyStyle
  Caption: TypographyStyle
  CaptionSemibold: TypographyStyle
  LargeCode: TypographyStyle
  MediumCode: TypographyStyle
  CaptionCode: TypographyStyle
  NormalCode: TypographyStyle
  NormalCodeLink: TypographyStyle
  SmallCode: TypographyStyle
}

declare type ColorTheme = {
  Background: string
  BackgroundDim: string
  BackgroundHighlight: string
  Divider: string
  InvertBackground: string
  InvertText: string
  Text: string
  TextDim: string
  TextRed: string
  TextYellow: string
  TextBlue: string
  TextGreen: string
  BackgroundRed: string
  BackgroundYellow: string
  BackgroundBlue: string
  BackgroundGreen: string
}

declare type ThemeSizes = {
  /** css length */
  MaxPageWidth: string | number
  /** css length */
  PageSidePadding: string | number
  /** css length – dialogs, codeblocks */
  MediumRadius: string | number
  /** css length – tiny tags, inline code, etc */
  SmallRadius: string | number
}

declare type FamilyAndWeight = {
  fontFamily: string
  /** Usually: Normal: 400; Semibold: 600; Bold: 700; ExtraBold: 800; Black/Ultra: 900 */
  fontWeight: number
}

declare type FontFamily = {
  Light: FamilyAndWeight
  Normal: FamilyAndWeight
  Medium: FamilyAndWeight
  Semibold: FamilyAndWeight
  Bold: FamilyAndWeight
  Ultra: FamilyAndWeight
}

declare type FontTheme = {
  HeadingFont: FontFamily
  BodyFont: FontFamily
  CodeFont: FontFamily
}

declare type Theme = {
  Fonts: FontTheme
  Typography: TypographyTheme
  Colors: ColorTheme
  Sizes: ThemeSizes
}
