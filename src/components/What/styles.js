import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    height: 780,
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  card: { margin: 16 },
  cardImg: {
    backgroundSize: 'contain',
    height: 250,
  },
}));
