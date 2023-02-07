import { createStyles } from '@mantine/core';

import bgWelcome from '@/public/assets/images/bg1_home_dark.png';
import bgImgArea from '@/public/assets/images/imgArea.png';

export const useStyles = createStyles(() => ({
  container: {
    backgroundImage: `url(${bgWelcome.src})`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  textWrapper: {
    textAlign: 'center',
    position: 'relative',
    height: '264px',
    width: '876px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    top: '196px',
    left: '510px',

    button: {
      height: '64px',
      width: '176px',
      borderRadius: '50px',
      background:
        'radial-gradient(118.75% 118.75% at 50% 0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',

      '&:hover': {
        background:
          'radial-gradient(188.28% 188.28% at 50% 0%, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
    },
  },
  imageContainer: {
    backgroundImage: `url(${bgImgArea.src})`,
    width: '1440px',
    height: '530px',
    marginTop: '300px',
    display: 'flex',
    justifyContent: 'center',
  },
}));
