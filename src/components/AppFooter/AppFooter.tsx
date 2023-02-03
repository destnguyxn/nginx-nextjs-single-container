import Image from 'next/image';
import React from 'react';

import footerImg2 from '@/public/assets/images/footer_neople.png';
import footerImg from '@/public/assets/images/footer_nexon.png';

import { useStyles } from './StyleFooter';

const AppFooter = () => {
  const { classes } = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.allContent}>
        <span className={classes.footerText}>
          © NEXON Korea Corporation All Rights Reserved.
        </span>

        <div className={classes.groupImg}>
          <Image
            className={classes.footerImg}
            src={footerImg}
            alt="testPic1"
            priority
          />
          <div className={classes.img2Area}>
            <Image
              className={classes.footerImg2}
              src={footerImg2}
              alt="testPic2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
