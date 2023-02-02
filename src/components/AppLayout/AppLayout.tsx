import { useMantineTheme } from '@mantine/core';
import type { ReactNode } from 'react';

import AppFooter from '../AppFooter/AppFooter';
import AppHeader from '../AppHeader/AppHeader';
import ChangeLangBtn from '../ChangeLangBtn/ChangeLangBtn';
import ChangeThemeBtn from '../ChangeThemeBtn/ChangeThemeBtn';
import styles from './AppLayout.module.scss';

type IAppLayoutProps = {
  children: ReactNode;
};

const AppLayout = (props: IAppLayoutProps) => {
  const theme = useMantineTheme();
  return (
    <div className={`${styles.appWrapper} w-full antialiased`}>
      <AppHeader />
      <div
        style={{
          position: 'absolute',
          bottom: '4rem',
          right: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <ChangeLangBtn />
        <ChangeThemeBtn />
      </div>
      <main
        className="flex-1 p-4"
        style={{
          backgroundColor: theme.other.backgroundBody,
          color: theme.other.textBody,
        }}
      >
        {props.children}
      </main>
      <AppFooter />
    </div>
  );
};

export { AppLayout };
