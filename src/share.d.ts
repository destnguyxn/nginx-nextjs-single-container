export interface ColorThemeVar {
  textBody: string;
  backgroundBody: string;
  backgroundFooter: string;
}

declare module '@mantine/core' {
  export interface MantineThemeOther extends ColorThemeVar {}
}
