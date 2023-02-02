import type { ColorScheme } from '@mantine/core';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import type { ColorThemeVar } from '@/share';

import { colorsThemeVar } from './colorsThemeVar';

// https://mantine.dev/theming/theme-object/

export default function AppThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  // toggle mantine theme
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const [colorTheme, setColorTheme] = useState<ColorThemeVar>(
    colorsThemeVar.COLOR_LIGHT
  );
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');

    setColorScheme(nextScheme);
    if (nextScheme === 'dark') setColorTheme(colorsThemeVar.COLOR_DARK);
    else setColorTheme(colorsThemeVar.COLOR_LIGHT);
  };

  // toggle tailwind theme
  useEffect(() => {
    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
      setColorTheme(colorsThemeVar.COLOR_DARK);
    } else {
      document.documentElement.classList.remove('dark');
      setColorTheme(colorsThemeVar.COLOR_LIGHT);
    }
  }, [colorScheme]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        inherit
        theme={{
          colorScheme,
          fontFamily: "'Noto Sans KR', sans-serif",
          lineHeight: '22px',
          other: colorTheme,
        }}
      >
        <NotificationsProvider position="top-right">
          {children}
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
