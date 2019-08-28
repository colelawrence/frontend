import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#4FC7F3',
  colorSecondary: '#48B3D8',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  // appBorderColor: '#48B3D8',
  appBorderRadius: 4, 

  // Typography
  fontBase: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
  fontCode: 'Monaco", "Fira Code", "Hack", monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Qri',
  brandUrl: 'https://qri.io',
  brandImage: '../images/logo-sb.svg',
});