import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import logo from '@/public/assets/images/logo.svg';

import LoginBtn from './LoginBtn';
import MyPageBtn from './MyPageBtn';
import { useStyles } from './styles';

const AppHeader = () => {
  const router = useRouter();
  const styles = useStyles();

  return (
    <header className={styles.classes.headerWrapper}>
      <Link href="/">
        <Image priority src={logo} alt="Nexon Open Api" />
      </Link>

      <nav className={`${styles.classes.navbarWrapper}`}>
        <ul>
          <li>
            <Link
              href="docs"
              title="Docs"
              className={
                router.pathname.includes('docs')
                  ? styles.classes.activeNav
                  : undefined
              }
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              href="apis"
              className={
                router.pathname.includes('apis')
                  ? styles.classes.activeNav
                  : undefined
              }
              title="APIs"
            >
              APIs
            </Link>
          </li>
          <li>
            <Link
              href="support"
              className={
                router.pathname.includes('support')
                  ? styles.classes.activeNav
                  : undefined
              }
              title="Support"
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              href="/forum/"
              className={
                router.pathname.includes('forum')
                  ? styles.classes.activeNav
                  : undefined
              }
              title="Forum"
            >
              Forum
            </Link>
          </li>
          <li>
            <Link
              href="/apps/"
              className={
                router.pathname.includes('apps')
                  ? styles.classes.activeNav
                  : undefined
              }
              title="Apps"
            >
              Apps
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center">
        <div className="mr-[15px]">
          <MyPageBtn />
        </div>
        <div className="ml-[15px]">
          <LoginBtn />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
