import { Text, Title } from '@mantine/core';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import PrimaryBtn from '@/components/Button/PrimaryBtn/PrimaryBtn';
import ScrollDownButton from '@/components/Button/ScrollDownButton/ScrollDownButton';

import { useStyles } from './styles';

const SectionWelcome = () => {
  const { classes } = useStyles();

  return (
    <section className={`${classes.container} containerWrapper`}>
      <div className={classes.textWrapper}>
        <Title order={5} className="title-md mb-[30px] leading-[98px]">
          넥슨의 수많은 <span className="text-[#53FFA2]">Data</span>를 기반으로
        </Title>

        <Text className="text-28-400 mb-[45px] leading-[41px] text-[#ffffffb3]">
          나만의 서비스를 나만의 색깔로 만들어보세요
        </Text>

        <div className="text-22-500 mx-auto">
          <PrimaryBtn>
            <span className="ml-[7px]">시작하기</span>
            <MdKeyboardArrowRight fontSize={'32px'} />
          </PrimaryBtn>
        </div>
      </div>

      <div className={`${classes.imageContainer} mx-auto`}>
        <ScrollDownButton />
      </div>
    </section>
  );
};

export default SectionWelcome;
