import { createGlobalTheme, style } from '@vanilla-extract/css';
import colors from 'tailwindcss/colors';

const palette = {
  white: '#fff',
  black: '#0e0e10',

  red: colors.red['500'],
  yellow: colors.yellow['300'],

  gray50: colors.gray['50'],
  gray100: '#F7F7F8',
  gray200: '#DDE1E4',
  gray300: '#C1C8CD',
  gray400: '#97A2AA',
  gray500: '#6D7B87',
  gray600: '#5B6771',
  gray700: '#49525A',
  gray800: '#32393E',
  gray900: '#21272C',

  blue50: colors.lightBlue['50'],
  blue100: '#EFF7FE',
  blue200: '#B9DCF8',
  blue300: '#86BFEE',
  blue400: '#58A2DF',
  blue500: '#3184C8',
  blue600: '#2C6CA0',
  blue700: '#265378',
  blue800: '#244866',
  blue900: '#213D54',
};

export const token = createGlobalTheme(':root', {
  color: {
    brand: palette.blue500,
    background: palette.gray100,
    text: palette.gray800
  },
  font: {
    body: '"Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  palette
});

export const exampleStyle = style({
  backgroundColor: token.color.background,
  fontFamily: token.font.body,
  color: token.color.text,
  padding: 10
});
