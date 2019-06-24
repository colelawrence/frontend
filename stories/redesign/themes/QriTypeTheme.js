/// <reference path="./Theme.d.ts" >

import { BrandFonts } from "./BrandFonts"

/**
 * Qri theme
 * @type {TypographyTheme}
 */
const QriTypeTheme = {
  Heading1: {
    Family: BrandFonts.Headings,
    Weight: BrandFonts.HeadingWeight.Bold,
    Size: "72px",
    LineHeight: "98px",
    LetterSpacing: "-0.03em",
  },
  Heading2: {
    Family: BrandFonts.Headings,
    Weight: BrandFonts.HeadingWeight.Bold,
    Size: "64px",
    LineHeight: "120%",
    LetterSpacing: "-0.03em",
  },
  Heading3: {
    Family: BrandFonts.Headings,
    Weight: BrandFonts.HeadingWeight.Bold,
    Size: "32px",
    LineHeight: "44px",
    LetterSpacing: "-0.03em",
  },
  Heading1Mobile: {
    Family: BrandFonts.Headings,
    Weight: BrandFonts.HeadingWeight.Bold,
    Size: "35px",
    LineHeight: "120%",
    LetterSpacing: "-0.03em",
  },
  Heading4: {
    Family: BrandFonts.Headings,
    Weight: BrandFonts.HeadingWeight.Bold,
    Size: "24px",
    LineHeight: "33px",
    LetterSpacing: "-0.03em",
  },
  Caption: {
    Family: BrandFonts.Body,
    Weight: BrandFonts.BodyWeight.Normal,
    Size: "14px",
    LineHeight: "16px",
    Transform: "uppercase",
  },
  CaptionSemibold: {
    Family: BrandFonts.Body,
    Weight: BrandFonts.BodyWeight.SemiBold,
    Size: "14px",
    LineHeight: "16px",
    Transform: "uppercase",
  },
  CaptionCode: {
    Family: BrandFonts.Code,
    Weight: BrandFonts.CodeWeight.SemiBold,
    Size: "14px",
    LineHeight: "16px",
    Transform: "uppercase",
  },
  NormalText: {
    Family: BrandFonts.Body,
    Weight: BrandFonts.BodyWeight.Normal,
    Size: "16px",
    LineHeight: "22px",
  },
  NormalTextSemibold: {
    Family: BrandFonts.Body,
    Weight: BrandFonts.BodyWeight.SemiBold,
    Size: "16px",
    LineHeight: "22px",
  },
  NormalTextActive: {
    Family: BrandFonts.Body,
    Weight: BrandFonts.BodyWeight.Bold,
    Size: "16px",
    LineHeight: "22px",
    LetterSpacing: "-0.03em",
  },
  MediumText: {
    Family: BrandFonts.Body,
    Weight: BrandFonts.BodyWeight.Normal,
    Size: "20px",
    LineHeight: "27px",
  },
  MediumTextSemibold: {
    Family: BrandFonts.Body,
    Weight: BrandFonts.BodyWeight.SemiBold,
    Size: "20px",
    LineHeight: "27px",
  },
  LargeText: {
    Family: BrandFonts.Body,
    Weight: BrandFonts.BodyWeight.Normal,
    Size: "24px",
    LineHeight: "33px",
  },
  LargeTextSemibold: {
    Family: BrandFonts.Body,
    Weight: BrandFonts.BodyWeight.SemiBold,
    Size: "24px",
    LineHeight: "33px",
  },
  SmallText: {
    Family: BrandFonts.Body,
    Weight: BrandFonts.BodyWeight.Normal,
    Size: "12px",
    LineHeight: "16px",
  },
  SmallTextSemibold: {
    Family: BrandFonts.Body,
    Weight: BrandFonts.BodyWeight.SemiBold,
    Size: "12px",
    LineHeight: "16px",
  },
  LargeCode: {
    Family: BrandFonts.Code,
    Weight: BrandFonts.CodeWeight.Medium,
    Size: "24px",
    LineHeight: "30px",
    LetterSpacing: "-0.04em",
  },
  MediumCode: {
    Family: BrandFonts.Code,
    Weight: BrandFonts.CodeWeight.Medium,
    Size: "20px",
    LineHeight: "25px",
    LetterSpacing: "-0.04em",
  },
  NormalCode: {
    Family: BrandFonts.Code,
    Weight: BrandFonts.CodeWeight.Medium,
    Size: "16px",
    LineHeight: "20px",
  },
  NormalCodeLink: {
    Family: BrandFonts.Code,
    Weight: BrandFonts.CodeWeight.Medium,
    Size: "16px",
    LineHeight: "20px",
    Decoration: "underline",
  },
  SmallCode: {
    Family: BrandFonts.Code,
    Weight: 500,
    Size: "12px",
    LineHeight: "15px",
    LetterSpacing: "0.01em",
  },
}

export default QriTypeTheme
