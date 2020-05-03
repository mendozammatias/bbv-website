export const styles = theme => ({
  container: {
    marginBottom: '2rem',
    zIndex: 0,
  },
  title: {
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      padding: '0 32px',
    },
  },
  decoration: {
    bottom: 15,
    height: 15,
    marginLeft: 50,
    position: 'relative',
    zIndex: -1,
  },
  itemsContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: '0 32px',
    },
  },
  cardContainer: {
    '&:hover': {
      '& > button': {
        backgroundColor: theme.palette.common.white,
        boxShadow:
          '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
      },
    },
  },
  card: {
    boxShadow: '0 4px 40px rgba(0, 0, 0, 0.2)',
    borderRadius: 32,
    marginTop: 8,
    marginBottom: 24,
    maxWidth: 200,
    padding: 24,
    width: 150,
    height: 150,
    display: 'flex',
    transition: 'all .4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  cardImg: {
    marginBottom: 0,
    height: 'auto',
    width: '100%',
    maxHeight: 102,
    borderRadius: 12,
  },
  link: {
    textDecoration: 'none',
    transition: 'top 0.5s lineal',
    '&:hover': {
      top: '-15px',
    },
  },
});
