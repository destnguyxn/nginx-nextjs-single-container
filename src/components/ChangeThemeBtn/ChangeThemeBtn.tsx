import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const ChangeThemeBtn = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={36}>
      {colorScheme === 'dark' ? <BsSun size={16} /> : <BsMoon size={16} />}
    </ActionIcon>
  );
};

export default ChangeThemeBtn;
