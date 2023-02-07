import { Button, Text, Title } from '@mantine/core';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import ScrollDownButton from '@/components/Button/ScrollDownButton/ScrollDownButton';

import { useStyles } from './styles';

const SectionWelcome = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.container}>
      <div className={classes.textWrapper}>
        <Title className="title-md">
          넥슨의 수많은 <span className="text-[#53FFA2]">Data</span>를 기반으로
        </Title>

        <Text className="text-28-400 mb-[15px]">
          나만의 서비스를 나만의 색깔로 만들어보세요
        </Text>

        <Button variant="default" className="text-22-500  mx-auto ">
          시작하기 <MdKeyboardArrowRight size={'32px'} className="ml-[5px]" />
        </Button>
      </div>

      <div className={`${classes.imageContainer} mx-auto`}>
        <ScrollDownButton />
      </div>
    </section>
  );
};

export default SectionWelcome;
