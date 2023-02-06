/* eslint-disable prettier/prettier */
export interface ColorThemeVar {
  textBody: string;
  backgroundBody: string;
  backgroundFooter: string;
  textFooter: string;
  noticeBackground: string;
}

const COLOR_LIGHT: ColorThemeVar = {
  textBody: "#000",
  backgroundBody: "whitesmoke",
  backgroundFooter: "#080A0F",
  textFooter: "#FFFFFF",
  noticeBackground: "#121621",
};

const COLOR_DARK: ColorThemeVar = {
  textBody: "#FFFFFF",
  backgroundBody: "#121621",
  backgroundFooter: "#080A0F",
  textFooter: "#FFFFFF",
  noticeBackground: "#121621",
};

export const colorsThemeVar = {
  COLOR_LIGHT,
  COLOR_DARK,
};
