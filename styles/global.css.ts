import { globalStyle } from '@vanilla-extract/css';
import { token } from './themes.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('html', {
  background: token.palette.blue800,
  color: token.palette.blue100,
});
