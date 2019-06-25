/// <reference path="./Theme.d.ts" >

import { BrandFonts } from "./BrandFonts"

/**
 * Qri theme
 * @type {TypographyTheme}
 */
export const QriTypography = {
  Heading1: {
    ...BrandFonts.HeadingFont.Bold,
    fontSize: "72px",
    lineHeight: "98px",
    letterSpacing: "-0.03em",
  },
  Heading2: {
    ...BrandFonts.HeadingFont.Bold,
    fontSize: "64px",
    lineHeight: "120%",
    letterSpacing: "-0.03em",
  },
  Heading3: {
    ...BrandFonts.HeadingFont.Bold,
    fontSize: "32px",
    lineHeight: "44px",
    letterSpacing: "-0.03em",
  },
  Heading1Mobile: {
    ...BrandFonts.HeadingFont.Bold,
    fontSize: "35px",
    lineHeight: "120%",
    letterSpacing: "-0.03em",
  },
  Heading4: {
    ...BrandFonts.HeadingFont.Bold,
    fontSize: "24px",
    lineHeight: "33px",
    letterSpacing: "-0.03em",
  },
  Caption: {
    ...BrandFonts.BodyFont.Normal,
    fontSize: "14px",
    lineHeight: "16px",
    textTransform: "uppercase",
  },
  CaptionSemibold: {
    ...BrandFonts.BodyFont.Semibold,
    fontSize: "14px",
    lineHeight: "16px",
    textTransform: "uppercase",
  },
  CaptionCode: {
    ...BrandFonts.CodeFont.Semibold,
    fontSize: "14px",
    lineHeight: "16px",
    textTransform: "uppercase",
  },
  NormalText: {
    ...BrandFonts.BodyFont.Normal,
    fontSize: "16px",
    lineHeight: "22px",
  },
  NormalTextSemibold: {
    ...BrandFonts.BodyFont.Semibold,
    fontSize: "16px",
    lineHeight: "22px",
  },
  NormalTextActive: {
    ...BrandFonts.BodyFont.Bold,
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "-0.03em",
  },
  MediumText: {
    ...BrandFonts.BodyFont.Normal,
    fontSize: "20px",
    lineHeight: "27px",
  },
  MediumTextSemibold: {
    ...BrandFonts.BodyFont.Semibold,
    fontSize: "20px",
    lineHeight: "27px",
  },
  LargeText: {
    ...BrandFonts.BodyFont.Normal,
    fontSize: "24px",
    lineHeight: "33px",
  },
  LargeTextSemibold: {
    ...BrandFonts.BodyFont.Semibold,
    fontSize: "24px",
    lineHeight: "33px",
  },
  SmallText: {
    ...BrandFonts.BodyFont.Normal,
    fontSize: "12px",
    lineHeight: "16px",
  },
  SmallTextSemibold: {
    ...BrandFonts.BodyFont.Semibold,
    fontSize: "12px",
    lineHeight: "16px",
  },
  SmallCode: {
    ...BrandFonts.CodeFont.Semibold,
    fontSize: "12px",
    lineHeight: "15px",
    letterSpacing: "0.01em",
  },
  NormalCode: {
    ...BrandFonts.CodeFont.Medium,
    fontSize: "16px",
    lineHeight: "20px",
  },
  NormalCodeLink: {
    ...BrandFonts.CodeFont.Medium,
    fontSize: "16px",
    lineHeight: "20px",
    textDecoration: "underline",
  },
  MediumCode: {
    ...BrandFonts.CodeFont.Medium,
    fontSize: "20px",
    lineHeight: "25px",
    letterSpacing: "-0.04em",
  },
  LargeCode: {
    ...BrandFonts.CodeFont.Medium,
    fontSize: "24px",
    lineHeight: "30px",
    letterSpacing: "-0.04em",
  },
}
