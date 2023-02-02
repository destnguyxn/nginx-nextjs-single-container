import { useMantineColorScheme } from '@mantine/core';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

import ChangeThemeBtn from '@/components/ChangeThemeBtn/ChangeThemeBtn';

import ChangeLangBtn from '../ChangeLangBtn/ChangeLangBtn';

const AppHeader = () => {
  const { colorScheme } = useMantineColorScheme();
  const { t } = useTranslation('common');

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        backgroundColor: colorScheme === 'dark' ? '#141517' : '#F8F9FA',
      }}
    >
      <nav>
        <ul className="flex flex-wrap text-xl">
          <li className="mr-6">
            <Link href="/">{t('home')}</Link>
          </li>
          <li className="mr-6">
            <Link href="/pokemons/">Pokemons</Link>
          </li>
          <li className="mr-6">
            <Link href="/page2/">Page2</Link>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <ChangeLangBtn />
        <ChangeThemeBtn />
      </div>
    </header>
  );
};

export default AppHeader;
