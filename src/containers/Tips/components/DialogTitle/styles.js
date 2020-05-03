export const styles = theme => ({
  root: {
    margin: 0,
    padding: 24,
  },
  title: {
    color: '#FFF',
    display: 'flex',
    fontSize: '2rem',
    justifyContent: 'center',
    paddingTop: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem',
      paddingTop: 8,
    },
  },
  closeButton: {
    color: '#FFF',
    right: 8,
    top: 8,
    position: 'absolute',
  },
});
