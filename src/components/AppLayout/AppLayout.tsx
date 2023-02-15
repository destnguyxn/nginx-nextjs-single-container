import type { ReactNode } from 'react';

import ChangeLangBtn from '../Button/ChangeLangBtn/ChangeLangBtn';
import ChangeThemeBtn from '../Button/ChangeThemeBtn/ChangeThemeBtn';

type IAppLayoutProps = {
  children: ReactNode;
};

const AppLayout = (props: IAppLayoutProps) => {
  return (
    <div className=" flex min-h-screen w-full  flex-col antialiased">
      {/* This will remove when have design UI */}
      <div
        style={{
          position: 'fixed',
          bottom: '130px',
          right: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <ChangeLangBtn />
        <ChangeThemeBtn />
      </div>
      <main className="flex-1">{props.children}</main>
    </div>
  );
};

export { AppLayout };
