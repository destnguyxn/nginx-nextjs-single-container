import Image from 'next/image';
import React from 'react';

import bgWelcome from '@/public/assets/images/bg1_home_dark.png';

const SectionWelcome = () => {
  return (
    <section>
      <Image
        src={bgWelcome}
        alt="Home 1"
        style={{
          width: '100vw',
          height: 'auto', // For responsive image
          maxHeight: 'calc(100vh - 68px)',
          objectFit: 'cover',
        }}
      />
    </section>
  );
};

export default SectionWelcome;
