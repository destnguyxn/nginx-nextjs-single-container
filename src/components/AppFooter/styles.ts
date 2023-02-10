import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: theme.other.backgroundFooter,
    width: '100%',
  },
  footerText: {
    fontSize: '12px',
    fontWeight: 300,
    padding: '1px 2px',
    opacity: 0.5,
    color: theme.other.textFooter,
  },
  footerImg: {
    width: '77px',
    height: '24px',
  },
  footerImg2: {
    width: '159px',
    height: '39px',
    marginLeft: '23px',
    marginTop: '-1px',
  },
  allContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '120px',
  },
  groupImg: {
    position: 'absolute',
    right: '12px',
    marginRight: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img2Area: {
    paddingBottom: '4px',
  },
}));
