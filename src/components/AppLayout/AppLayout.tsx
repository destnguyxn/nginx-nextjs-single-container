import type { ReactNode } from 'react';

import AppFooter from '../AppFooter/AppFooter';
import AppHeader from '../AppHeader/AppHeader';

type IAppLayoutProps = {
  children: ReactNode;
};

const AppLayout = (props: IAppLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col antialiased">
      <AppHeader />
      <main className="flex-1 p-4">{props.children}</main>
      <AppFooter />
    </div>
  );
};

export { AppLayout };
