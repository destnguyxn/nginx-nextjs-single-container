import { Card, Center, Grid, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

import Icon1 from '@/public/assets/images/ic_01.png';
import Icon2 from '@/public/assets/images/ic_02.png';
import Icon3 from '@/public/assets/images/ic_03.png';

import useStyles from './styles';

const SectionCard = () => {
  const styles = useStyles();
  return (
    <Center className={styles.classes.sectionCardContainer}>
      <Grid className="w-[1000px]">
        <Grid.Col className="p-0 text-center" span={12}>
          <Text className={styles.classes.firstTitle}>
            넥슨 <span className={styles.classes.openAPI}>Open API</span>를
            활용하여 멋진 경험에 도전해보세요.
          </Text>
        </Grid.Col>
        <Grid.Col className="p-0 text-center" span={12}>
          <Text className={styles.classes.secondTitle}>
            넥슨 Open API를 활용하여 멋진 경험에 도전해보세요.
          </Text>
        </Grid.Col>

        <Grid.Col span={4} className="min-w-[320px]">
          <Card className={styles.classes.card} withBorder>
            <Card.Section>
              <Image
                src={Icon2}
                alt="Norway"
                className={styles.classes.cardImage}
              />
            </Card.Section>

            <Text className={styles.classes.cardTitle}>Docs</Text>

            <Text
              className={styles.classes.cardContent}
              color="dimmed"
              lineClamp={2}
            >
              Docs를 읽고 넥슨의 <br />
              Open API에 대해 알아보세요.
            </Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card className={styles.classes.card} withBorder>
            <Card.Section>
              <Image
                src={Icon1}
                alt="Norway"
                className={styles.classes.cardImage}
              />
            </Card.Section>

            <Text className={styles.classes.cardTitle}>APIs</Text>

            <Text
              className={styles.classes.cardContent}
              color="dimmed"
              lineClamp={2}
            >
              API기능을 확인해보고, <br /> 자유롭게 개발해보세요.
            </Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card className={styles.classes.card} withBorder>
            <Card.Section>
              <Image
                src={Icon3}
                alt="Norway"
                className={styles.classes.cardImage}
              />
            </Card.Section>

            <Text className={styles.classes.cardTitle}>Forum</Text>

            <Text
              className={styles.classes.cardContent}
              color="dimmed"
              lineClamp={2}
            >
              자신의 서비스를 소개하거나 다양한 의견을 나눠보세요.
            </Text>
          </Card>
        </Grid.Col>
      </Grid>
    </Center>
  );
};

export default SectionCard;
