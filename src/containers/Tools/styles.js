export const styles = theme => ({
  container: {
    backgroundColor: '#F5F5F5',
  },
  heroImg: {
    alignItems: 'center',
    display: 'flex',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: '0 32px',
    },
  },
  heroHeading: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    marginLeft: theme.spacing(6),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginLeft: 0,
      textAlign: 'center',
      padding: '0 32px',
    },
  },
});
