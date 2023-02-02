import { useMantineTheme } from '@mantine/core';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AppSEO } from '@/components/AppSEO/AppSEO';
import SectionCard from '@/modules/homepage/SectionCard/SectionCard';
import SectionWellcome from '@/modules/homepage/SectionWellcome/SectionWellcome';

const Index = () => {
  const theme = useMantineTheme();

  return (
    <>
      <AppSEO title={'App Nextjs'} description="Homepage" />
      {theme.other.textBody}
      <SectionWellcome />
      <SectionCard />
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
