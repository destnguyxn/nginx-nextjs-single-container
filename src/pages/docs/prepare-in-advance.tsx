import { Center, Grid, List, Text } from '@mantine/core';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import DocsLayout from '@/modules/docs/DocsLayout/DocsLayout';

const prepareInAdvance = () => {
  return (
    <>
      <DocsLayout>
        <Center className="max-w-[1000px] text-[#B1B7C4]">
          <Grid>
            <Grid.Col>
              <Text className="text-18-400 mb-[64px] leading-[32px] text-[#E8EBF2]">
                넥슨 개발자센터를 통해 OpenAPI를 호출하기 전, 계정과 해당 계정에
                대한 권한이 필요합니다. <br /> 아래에서 계정과 권한을 받을 수
                있는 방법을 소개해드릴게요.
              </Text>
            </Grid.Col>
            <Grid.Col>
              <Text className="text-18-700 mb-[-1px] text-white">계정</Text>
            </Grid.Col>
            <Grid.Col>
              <Text className="text-16-400 mb-[16px]">
                넥슨 개발자센터를 활용하려면 넥슨 계정으로 로그인 해야 합니다.
              </Text>
            </Grid.Col>
            <Grid.Col>
              <Text className="text-16-400  mb-[16px] leading-[28px]">
                이미 넥슨 ID가 있는 넥슨 회원이시면 상단 우측에 있는{' '}
                {"'로그인'"}
                버튼을 눌러 로그인 할 수 있으며, 아직 넥슨 ID가 없으시다면
                <br /> 회원가입을 통해 넥슨 ID를 발급받으실 수 있습니다.
              </Text>
            </Grid.Col>
            <Grid.Col>
              <Text className="text-16-400 mb-[44px]">
                넥슨 ID를 통해 Mypage에서 나의 Application을 등록하고, 등록된
                Application에 따른 권한(API Key)을 받을 수 있습니다.
              </Text>
            </Grid.Col>
            <Grid.Col>
              <Text className="text-18-700 mb-[14px] text-white">권한</Text>
            </Grid.Col>
            <Grid.Col>
              <Text className="text-18-500 text-[#8EB2FF]">
                Application 등록
              </Text>
            </Grid.Col>
            <Grid.Col>
              <List
                type="ordered"
                spacing={28}
                className="text-16-400 mb-[24px] list-decimal text-[#B1B7C4]"
              >
                <List.Item className="leading-[28px]">
                  넥슨 ID로 로그인 후 {'마이페이지>'} 새 Application 등록 버튼을
                  클릭한 후 Application 정보를 기입합니다.
                </List.Item>
                <List.Item className="leading-[28px]">
                  입력한 Application정보에 따라 선택한 게임의 API의 개발용 혹은
                  서비스용 API Key를 발급받게 됩니다. <br />
                  Application의 사용 용도 구분 (개발/ 서비스)에 따라, 호출
                  정책과 유효성을 검사하는 기준이 달라집니다. <br />
                  Application 개발이 종료되고, 서비스단계로 변경될 경우
                  마이페이지에서 사용 용도 구분(토큰) 변경이 가능합니다. <br />
                </List.Item>
                <List.Item className="leading-[28px]">
                  Application 등록이 정상적으로 완료되면, 토큰이 발급됩니다.
                  <br />
                  (API Key는 등록한 어플리케이션 별 1개씩 발급받을 수 있으며
                  하나의 넥슨 ID에 동일 API의 API Key를 최대 3개까지 보유할 수
                  있습니다.)
                </List.Item>
                <List.Item className="leading-[28px]">
                  토큰은 만료 시 마이페이지에서 {"'재발급'"}받을 수 있으며, 특정
                  사유에 따라 차단 상태/ 사유를 확인 할 수 있습니다.
                </List.Item>
              </List>
            </Grid.Col>
            <Grid.Col>
              <Text className="text-18-500 text-[#8EB2FF]">API Key 타입</Text>
            </Grid.Col>
            <Grid.Col>
              <Text className="text-16-400 mb-[16px] leading-[28px]">
                NEXON DEVELOPERS에서는 개발과 서비스 두 가지 타입의 API Key를
                제공합니다. <br />
                개발 API Key는 제한된 호출 허용량과 비교적 짧은 만료시간으로
                구성되어 API를 테스트해보거나 어플리케이션을 개발하는 동안
                사용하기에 적합합니다.
                <br />
                서비스 API Key는 보다 높은 호출 허용량과 긴 만료시간으로
                구성되어 어플리케이션을 출시하여 많은 사용자들이 사용할 수
                있도록
                <br />
                설정하는 단계에 적합합니다.
                <br />
                (자세한 호출 허용량 및 만료시간 정보는 FAQ에서 확인할 수
                있습니다)
              </Text>
            </Grid.Col>
            <Grid.Col>
              <Text className="text-16-400 mb-[24px] leading-[28px]">
                어플리케이션 신규 등록 시 발급 희망 API Key 타입을 서비스로
                선택한 후 유효한 서비스 URL과 어플리케이션 설명 및 API 활용
                목적을 모두 기입하면 <br />
                발급됩니다.
                <br />
                서비스 URL이 아직 없을 수 있는 개발 단계에서는 개발 API Key를
                발급 받아 사용한 후, 서비스 URL이 준비된 시점에
                <br />
                서비스 API Key를 새로 발급 받아 사용하는 것을 추천합니다.
                <br />
              </Text>
            </Grid.Col>
            <Grid.Col>
              <Text className="text-18-500 text-[#8EB2FF]">API Key 재발급</Text>
            </Grid.Col>
            <Grid.Col>
              <Text className="text-16-400 leading-[28px]">
                API Key가 만료되었거나, 유출 등 기타 다른 사유로 재발급이 필요할
                수 있습니다. <br />
                마이페이지 {'> '}내 어플리케이션 목록에서 API Key를 재발급 받을
                수 있습니다.
                <br />
                재발급 시에는 신규 API Key가 발급되고 유효기간도 갱신되며, API를
                사용하고 계시던 서비스에 재발급된 API Key를 다시 적용해야
                합니다.
              </Text>
            </Grid.Col>
          </Grid>
        </Center>
      </DocsLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      // Will be passed to the page component as props
    },
  };
};

export default prepareInAdvance;
