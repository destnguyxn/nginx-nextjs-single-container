import { useMantineTheme } from '@mantine/core';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AppSEO } from '@/components/AppSEO/AppSEO';

const Index = () => {
  const theme = useMantineTheme();
  return (
    <>
      <AppSEO title={'App Nextjs'} description="Homepage" />

      <div>This is app Nextjs page</div>
      {theme.other.backgroundBody}
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

export default Index;
