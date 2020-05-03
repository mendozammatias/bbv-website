import React from 'react';
import { Link as MuiLink, Hidden, makeStyles } from '@material-ui/core';
import MenuMobile from '@components/MenuMobile';

import { useTranslation } from '@hooks/useTranslation';
import Link from './Link';

const useStyles = makeStyles((theme) => ({
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontWeight: 500,
    fontSize: '1.1rem',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuItem: {
    alignItems: 'center',
    color: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'center',
    height: 44,
    fontSize: '1rem',
    fontWeight: 400,
    margin: theme.spacing(1, 0),
    minWidth: 120,
    textTransform: 'uppercase',
    padding: theme.spacing(0, 2),

    '&:hover': {
      backgroundColor: 'transparent',
      position: 'relative',
      '&:after': {
        backgroundColor: '#C5FFE4',
        bottom: 8,
        left: -8,
        content: '""',
        height: 15,
        position: 'absolute',
        width: 80,
        zIndex: -1,
      },
    },
  },
}));

const RemoteWorkingMenu = ({ menu }) => {
  const translate = useTranslation();
  const classes = useStyles();

  const menuItems = menu.map((item) => ({
    ...item,
    label: translate(item.label),
  }));

  return (
    <>
      <nav className={classes.nav}>
        <Hidden only={['xs', 'sm']}>
          {menuItems.map(({ label, to, external }, idx) => (
            <MuiLink
              key={`remote_menu_desktop_${idx}`}
              to={to}
              component={Link}
              external={external}
              className={classes.menuItem}
              aria-label={label}
              target={external ? '_blank' : '_self'}
              rel={external ? 'noopener noreferrer' : undefined}
              underline="none"
              disableRipple
            >
              {label}
            </MuiLink>
          ))}
        </Hidden>
      </nav>
      <MenuMobile menu={menuItems} />
    </>
  );
};

RemoteWorkingMenu.displayName = 'RemoteWorkingMenu';

export default RemoteWorkingMenu;
