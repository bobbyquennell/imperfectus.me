import { style } from "@vanilla-extract/css";
import { token } from "../styles/themes.css";

export const footer = style({
  backgroundColor: token.palette.blue100,
  fontFamily: token.font.body,
  color: token.palette.blue800,
  padding: 10
});
