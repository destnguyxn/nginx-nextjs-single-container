import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  button: {
    height: '64px',
    width: '176px',
    padding: '18px 0',

    position: 'relative',
    zIndex: 0,

    borderRadius: '50px',
    background: `radial-gradient(118.75% 118.75% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)`,

    '&:after': {
      content: '""',
      position: 'absolute',
      borderRadius: '50px',
      inset: '-1px',
      padding: '1px',
      zIndex: -1,
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(117, 131, 255, 0.224) 100%)',
      WebkitMask:
        'linear-gradient(#FFFFFF 0 0) content-box, linear-gradient(#FFFFFF 0 0)',
      mask: 'linear-gradient(#FFFFFF 0 0) content-box, linear-gradient(#FFFFFF 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
    },

    '&:before': {
      content: '""',
      position: 'absolute',
      borderRadius: '50px',
      inset: '18px',
      zIndex: -2,
      background: 'rgba(15, 75, 166, 0.2)',
      filter: 'blur(10px)',
    },

    '&:hover': {
      background:
        'radial-gradient(188.28% 188.28% at 50% 0%, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.1) 100%)',
    },
  },
}));
