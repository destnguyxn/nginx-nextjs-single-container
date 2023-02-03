export interface ColorThemeVar {
  textBody: string;
  backgroundBody: string;
  backgroundFooter: string;
  textFooter: string;
}

const COLOR_LIGHT: ColorThemeVar = {
  textBody: '#000',
  backgroundBody: 'whitesmoke',
  backgroundFooter: '#080A0F',
  textFooter: '#FFFFFF',
};

const COLOR_DARK: ColorThemeVar = {
  textBody: '#FFFFFF',
  backgroundBody: '#121621',
  backgroundFooter: '#080A0F',
  textFooter: '#FFFFFF',
};

export const colorsThemeVar = {
  COLOR_LIGHT,
  COLOR_DARK,
};
