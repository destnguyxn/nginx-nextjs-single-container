import { useMantineTheme } from '@mantine/core';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AppSEO } from '@/components/AppSEO/AppSEO';
import SectionCard from '@/modules/homepage/SectionCard/SectionCard';
import SectionWelcome from '@/modules/homepage/SectionWelcome/SectionWelcome';

const Index = () => {
  const theme = useMantineTheme();

  return (
    <>
      <AppSEO title={'App Nextjs'} description="Homepage" />
      <div className="mt-20">
        {theme.other.textBody}
        <SectionWelcome />
        <SectionCard />
      </div>
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