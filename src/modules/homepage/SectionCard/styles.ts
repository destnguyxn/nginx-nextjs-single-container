import { createStyles } from '@mantine/core';

import bg2_home_dark from '@/public/assets/images/bg2_home_dark.png';

const useStyles = createStyles((theme) => {
  const darkMode = theme.colorScheme === 'dark';

  return {
    openAPI: {
      color: darkMode ? 'white' : 'black',
      fontWeight: 700,
    },
    firstTitle: {
      marginBottom: '11px',
      fontWeight: 400,
      fontSize: '40px',
      color: darkMode ? '#BEBFC2' : '#868E96',
    },
    secondTitle: {
      fontWeight: 400,
      fontSize: '26px',
      marginBottom: '70px',
      color: darkMode ? '#BEBFC2' : '#868E96',
      lineHeight: '60px',
    },
    card: {
      height: '320px',
      width: '320px',
      background: '#8fa2e81a',
      boxShadow: '0px 4px 4px #00000040',
      backdropFilter: 'blur(10px)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#FFFFFF0D',
      transition: 'transform 0.3s',
      borderRadius: '5px',

      '&:hover': {
        transform: 'translateY(-30px)',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#255DEC',
        cursor: 'pointer',
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    cardTitle: {
      fontSize: '30px',
      lineHeight: '48px',
      textAlign: 'center',
      fontFamily: 'KlavikaNX',
      marginBottom: '6px',
      color: darkMode ? 'white' : 'black',
    },
    cardImage: {
      height: '103px',
      marginTop: '50px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '21px',
      objectFit: 'none',
    },
    cardContent: {
      fontFamily: 'Noto Sans KR',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '28px',
      textAlign: 'center',
      alignItems: 'center',
      margin: '0 30px 32px 30px',
      color: '#B3BAC5',
    },
    sectionCardContainer: {
      backgroundImage: `url(${bg2_home_dark.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto',
      padding: '144px',
    },
  };
});

export default useStyles;
