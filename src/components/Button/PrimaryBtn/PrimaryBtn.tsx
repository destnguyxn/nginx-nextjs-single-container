import { Button } from '@mantine/core';
import React from 'react';

import { useStyles } from './styles';

type Props = {
  children: React.ReactNode;
};

const PrimaryBtn = (props: Props) => {
  const { classes } = useStyles();
  return (
    <Button className={`${classes.button} text-22-500`}>
      {props.children}
    </Button>
  );
};

export default PrimaryBtn;
