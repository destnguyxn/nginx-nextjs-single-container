import { Box, Text, UnstyledButton } from '@mantine/core';
import React from 'react';

import { useStyles } from './styles';

// TODO: replace text style with theme style
export default function SectionNotice() {
  const styles = useStyles();
  // const { colorScheme } = useMantineColorScheme();
  return (
    <Box className={styles.classes.wrapper}>
      <div className={styles.classes.container}>
        <div className="flex items-center gap-[10px]">
          <Text className={styles.classes.label}>{`[공지사항]`}</Text>
          <div></div>
          <Text className={styles.classes.content}>8/22(수) API 점검안내</Text>
          <Box
            className="h-[15px] w-px"
            sx={(_theme) => ({
              backgroundColor: '#292d37',
            })}
          />
          <Text className={styles.classes.date}>2022.08.22</Text>
        </div>
        <div className="flex items-center gap-[15px]">
          <UnstyledButton
            className={`${styles.classes.button} aspect-square w-[22px] `}
          >
            <div className="mx-auto w-fit">
              <svg
                className="mr-px"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L2 6.00054L7 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </UnstyledButton>

          <UnstyledButton
            className={`${styles.classes.button} aspect-square w-[22px]`}
          >
            <div className="mx-auto w-fit">
              <svg
                className="ml-px"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                x="30px"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L6 5.99946L1 0.999999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  x="3px"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </UnstyledButton>
        </div>
      </div>
    </Box>
  );
}

// wait for api
// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale ?? 'en', ['common])),
//       // Will be passed to the page component as props
//     },
//   };
// };
