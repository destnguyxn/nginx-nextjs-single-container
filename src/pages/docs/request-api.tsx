import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import DocsLayout from '@/modules/docs/DocsLayout/DocsLayout';

const requestApi = () => {
  return (
    <>
      <DocsLayout>
        <div>This is Api docs</div>
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

export default requestApi;
