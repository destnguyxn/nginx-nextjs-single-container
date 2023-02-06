/* eslint-disable prettier/prettier */
export interface ColorThemeVar {
  textBody: string;
  backgroundBody: string;
  backgroundFooter: string;
  textFooter: string;
  noticeBackground: string;
  textNav: string;
  textNavHover: string;
}

const COLOR_LIGHT: ColorThemeVar = {
  textBody: "#000",
  backgroundBody: "whitesmoke",
  backgroundFooter: "#080A0F",
  textFooter: "#FFFFFF",
  textNav: "#FFFFFF",
  textNavHover: "#000000",
  noticeBackground: "#121621",
};

const COLOR_DARK: ColorThemeVar = {
  textBody: "#FFFFFF",
  backgroundBody: "#121621",
  backgroundFooter: "#080A0F",
  textFooter: "#FFFFFF",
  textNav: "#B1B7C4",
  textNavHover: "#FFFFFF",
  noticeBackground: "#121621",
};

export const colorsThemeVar = {
  COLOR_LIGHT,
  COLOR_DARK,
};
