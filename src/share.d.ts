import type { ColorThemeVar } from '@/config/colorsThemeVar';

declare module '@mantine/core' {
  export interface MantineThemeOther extends ColorThemeVar {}
}
