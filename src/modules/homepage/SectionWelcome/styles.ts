import { createStyles } from '@mantine/core';

import bgImgArea from '@/public/assets/images/imgArea.png';

export const useStyles = createStyles(() => ({
  container: {
    height: '1080px',
  },
  textWrapper: {
    textAlign: 'center',
    paddingTop: '196px',
    height: '264px',
    width: '876px',
    margin: '0 auto',
  },

  imageContainer: {
    backgroundImage: `url(${bgImgArea.src})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    maxWidth: '1440px',
    height: '530px',
    marginTop: '300px',
    display: 'flex',
    justifyContent: 'center',
  },
}));
