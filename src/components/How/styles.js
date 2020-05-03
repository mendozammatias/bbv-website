import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  section: {
    height: 920,
    backgroundColor: '#F7F7F7',
    clipPath: 'polygon(0 0%, 100% 10%, 100% 100%, 0 90%)',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      clipPath: 'polygon(0 0%, 100% 10%, 100% 100%, 0 90%)',
      padding: '100px 0',
    },
    [theme.breakpoints.down('xs')]: {
      clipPath: 'polygon(0 0%, 100% 5%, 100% 100%, 0 95%)',
    },
  },
  container: {
    height: '100%',
  },
  card: {
    margin: 16,
  },
  cardImg: {
    backgroundSize: 'contain',
    height: 250,
  },
}));
