import React from 'react';
import { makeStyles } from '@material-ui/core';
import Link from '@components/Link';
import BBVLogo from '@static/logo/header-logo.dark.png';

const useStyles = makeStyles(theme => ({
  logo: {
    marginBottom: 0,
    width: 250,
  },
  link: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
  },
}));

const RemoteWorkingLogo = () => {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.link}>
      <img src={BBVLogo} alt="BBV logo" className={classes.logo} />
    </Link>
  );
};

RemoteWorkingLogo.displayName = 'RemoteWorkingLogo';

export default RemoteWorkingLogo;
