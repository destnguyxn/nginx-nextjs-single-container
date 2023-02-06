import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => {
  const darkMode = theme.colorScheme === 'dark';

  return {
    openAPI: {
      color: darkMode ? 'white' : 'black',
    },
    firstTitle: {
      fontWeight: 400,
      fontSize: '40px',
      marginBottom: '30px',
      color: darkMode ? '#BEBFC2' : '#868E96',
    },
    secondTitle: {
      fontWeight: 400,
      fontSize: '26px',
      marginBottom: '70px',
      color: darkMode ? '#BEBFC2' : '#868E96',
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
      transition: 'margin-top 0.3s',
      // borderImage: 'linear-gradient(to top, #ffffff0d, #ffffff26) 1 content-box',
      borderRadius: '5px',

      '&:hover': {
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#255DEC',
        marginTop: '-30px',
        cursor: 'pointer',
      },
    },
    cardTitle: {
      // fontWeight: 900,
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
      margin: '0 34px 32px 34px',
    },
    cardSection: {},
  };
});

export default useStyles;
