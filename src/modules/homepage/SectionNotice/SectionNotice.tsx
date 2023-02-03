import { Box, Text, UnstyledButton } from '@mantine/core';
import React from 'react';

// TODO: replace text style with theme style
export default function SectionNotice() {
  return (
    <Box
      className="pt-[30px] pb-[29px]"
      sx={(_theme) => ({
        backgroundColor: '#121621',
      })}
    >
      <div className="mx-auto flex w-full max-w-[1000px] justify-between  align-middle text-[16px] font-medium leading-[24px] tracking-[-.35px] ">
        <div className="flex items-center gap-[10px]">
          <Text color="#747A86">{`[공지사항]`}</Text>
          <div></div>
          <Text color="#C6CCD7">8/22(수) API 점검안내</Text>
          <Box
            className="h-[15px] w-px"
            sx={(_theme) => ({
              backgroundColor: '#292d37',
            })}
          />
          <Text className="font-light" color="#51555D">
            2022.08.22
          </Text>
        </div>
        <div className="flex items-center gap-[15px]">
          <UnstyledButton
            sx={(_theme) => ({
              backgroundColor: '#ffffff1a',
              border: '1.5px solid #ffffff26',
              borderRadius: '2px',
              '&:active': {
                backgroundColor: '#ffffff26 !important',
              },
            })}
            className="aspect-square w-[22px] "
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
                  stroke="#A1A6AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </UnstyledButton>

          <UnstyledButton
            sx={(_theme) => ({
              backgroundColor: '#ffffff1a',
              border: '1.5px solid #ffffff26',
              borderRadius: '2px',
              '&:active': {
                backgroundColor: '#ffffff26 !important',
              },
            })}
            className="aspect-square w-[22px] "
          >
            <div className="mx-auto w-fit">
              <svg
                className="ml-px"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L6 5.99946L1 0.999999"
                  stroke="#A1A6AF"
                  stroke-width="1.5"
                  stroke-linecap="round"
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
