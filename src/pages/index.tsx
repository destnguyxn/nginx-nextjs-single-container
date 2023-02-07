import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useLayoutEffect, useRef } from 'react';

import { AppSEO } from '@/components/AppSEO/AppSEO';
import { useScroll } from '@/hooks/useScroll';
import SectionCard from '@/modules/homepage/SectionCard/SectionCard';
import SectionNotice from '@/modules/homepage/SectionNotice/SectionNotice';
import SectionWelcome from '@/modules/homepage/SectionWelcome/SectionWelcome';

const Index = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const y = useScroll(ref1, ref2);
  useLayoutEffect(() => {}, [y]);

  return (
    <>
      <AppSEO title={'App Nextjs'} description="Homepage" />
      <div ref={ref1}>
        <SectionWelcome />
      </div>
      <div ref={ref2}>
        <SectionCard />
      </div>
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
