import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#EEE',
    height: 800,
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      height: 1000,
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      height: 1900,
      padding: theme.spacing(2),
    },
  },
  clientsContainer: {
    alignItems: 'center',
    display: 'grid',
    gridGap: theme.spacing(2),
    gridTemplateRows: 'repeat(3, 200px)',
    gridTemplateColumns: 'auto auto auto',
    justifyContent: 'center',
    margin: '32px auto 0',
    [theme.breakpoints.down('sm')]: {
      gridTemplateRows: 'repeat(4, 200px)',
      gridTemplateColumns: 'auto auto',
      margin: '32px auto 0',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateRows: 'repeat(8, 200px)',
      gridTemplateColumns: 'auto',
      margin: '32px auto 0',
    },
  },
}));
