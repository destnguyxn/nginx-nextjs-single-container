import { useMantineTheme } from '@mantine/core';
import type { ReactNode } from 'react';

import AppFooter from '../AppFooter/AppFooter';
import AppHeader from '../AppHeader/AppHeader';
import styles from './AppLayout.module.scss';

type IAppLayoutProps = {
  children: ReactNode;
};

const AppLayout = (props: IAppLayoutProps) => {
  const theme = useMantineTheme();
  return (
    <div className={`${styles.appWrapper} w-full antialiased`}>
      <AppHeader />
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
