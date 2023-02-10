import type { ReactNode } from 'react';
import React from 'react';

type IDocsLayoutProps = {
  children: ReactNode;
};

const DocsLayout = ({ children }: IDocsLayoutProps) => {
  return (
    <>
      <div className="mt-[70px]">
        <div>temp docsLayout</div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default DocsLayout;
