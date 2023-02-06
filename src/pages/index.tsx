import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AppSEO } from '@/components/AppSEO/AppSEO';
import SectionCard from '@/modules/homepage/SectionCard/SectionCard';
import SectionNotice from '@/modules/homepage/SectionNotice/SectionNotice';
import SectionWelcome from '@/modules/homepage/SectionWelcome/SectionWelcome';

const Index = () => {
  return (
    <>
      <AppSEO title={'App Nextjs'} description="Homepage" />
      <SectionWelcome />
      <SectionCard />
      <SectionNotice />
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
