declare type FontStyle = {
  Family: string[];
  /** Usually: Normal: 400; Semibold: 600; Bold: 700; ExtraBold: 800; Black/Ultra: 900 */
  Weight: number;
  Size: string;
  LineHeight: string;
  Style?: null | "normal" | "italic";
  LetterSpacing?: null | string;
  Decoration?: null | "underline";
  Transform?: null | "uppercase";
};

declare type TypographyTheme = {
  Heading1: FontStyle;
  Heading2: FontStyle;
  Heading3: FontStyle;
  Heading1Mobile: FontStyle;
  Heading4: FontStyle;
  NormalText: FontStyle;
  NormalTextSemibold: FontStyle;
  /** Activated normal text -- bolded */
  NormalTextActive: FontStyle;
  MediumText: FontStyle;
  MediumTextSemibold: FontStyle;
  LargeText: FontStyle;
  LargeTextSemibold: FontStyle;
  SmallText: FontStyle;
  SmallTextSemibold: FontStyle;
  Caption: FontStyle;
  CaptionSemibold: FontStyle;
  LargeCode: FontStyle;
  MediumCode: FontStyle;
  CaptionCode: FontStyle;
  NormalCode: FontStyle;
  NormalCodeLink: FontStyle;
  SmallCode: FontStyle;
};

declare type ColorTheme = {
  Background: string;
  BackgroundDim: string;
  BackgroundHighlight: string;
  Divider: string;
  InvertBackground: string;
  InvertText: string;
  Text: string;
  TextDim: string;
  TextRed: string;
  TextYellow: string;
  TextBlue: string;
  TextGreen: string;
  BackgroundRed: string;
  BackgroundYellow: string;
  BackgroundBlue: string;
  BackgroundGreen: string;
};

declare type ThemeSizes = {
  /** css length */
  MaxPageWidth: string | number;
  /** css length */
  PageSidePadding: string | number;
};

declare type Theme = {
  Type: TypographyTheme;
  Colors: ColorTheme;
  Sizes: ThemeSizes;
};
