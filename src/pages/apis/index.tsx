import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import { AppSEO } from '@/components/AppSEO/AppSEO';

const apis = () => {
  return (
    <div>
      <AppSEO title={'App Nextjs'} description="Homepage" />
      This is the APIs page
    </div>
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

export default apis;
