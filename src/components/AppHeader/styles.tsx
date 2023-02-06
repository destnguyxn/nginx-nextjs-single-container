import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    padding: '30px',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
  },

  navbarWrapper: {
    ul: {
      display: 'flex',
      alignItems: 'center',
      li: {
        padding: '0 15px',
        a: {
          color: theme.other.textNav,
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '28px',
          textAlign: 'center',
          textTransform: 'capitalize',
          '&:hover': {
            color: theme.other.textNavHover,
            fontWeight: 700,
          },
          '&::before': {
            display: 'block',
            content: 'attr(title)',
            fontWeight: 700,
            height: 0,
            overflow: 'hidden',
            visibility: 'hidden',
          },
        },
      },
    },
  },

  activeNav: {
    textDecoration: 'underline',
    textUnderlineOffset: '5px',
    textDecorationThickness: '2px',
    color: `${theme.other.textNavHover} !important`,
    fontWeight: '700 !important' as any, // Mantine bug not allowing important
  },

  btnWrapper: {
    border: '1px solid #5B606A',
    borderRadius: '100px',
    color: '#A1A7B5',
    backgroundColor: 'transparent',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '22px',
    padding: '10px 18px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: '#FFFFFF',
    },
  },

  colorMyPage: {
    '&:hover': {
      color: '#FFFFFF',
    },
  },

  myPageBtnWrapper: {
    display: 'flex',
    alignItems: 'center',
    color: '#B1B7C4',
    lineHeight: '28px',
    fontSize: '18px',
    padding: '2px 12px',
    '&:hover': {
      color: '#FFFFFF',
    },
  },
  activeMyPage: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    color: '#FFFFFF',
    '& .colorMyPage': {
      color: '#FFFFFF',
    },
  },
}));
