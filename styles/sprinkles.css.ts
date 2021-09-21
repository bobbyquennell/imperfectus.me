import {
  defineProperties,
  createSprinkles,
} from '@vanilla-extract/sprinkles';
import { token } from './themes.css';

export const lightMode = 'light';
export const darkMode = 'dark';

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { selector: `.${darkMode} &` },
  },
  defaultCondition: 'lightMode',
  properties: {
    background: token.palette,
    color: token.palette,
  },
});

export const sprinkles = createSprinkles(
  colorProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
