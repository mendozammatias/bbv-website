import {
  Drawer as MuiDrawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import React from 'react';
import Link from './Link';
import { useTranslation } from './Provider';

const Drawer = props => {
  const translate = useTranslation();

  return (
    <Hidden only={['md', 'lg', 'xl']} implementation="css">
      <MuiDrawer
        anchor="left"
        open={props.open}
        variant="temporary"
        onClose={props.onClose}
        classes={{
          paper: props.className,
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List>
          {props.drawerItems.map(({ key, slug, external }) => (
            <ListItem
              button
              key={key}
              to={slug}
              component={Link}
              external={external}
              aria-label={translate(key)}
              target={external ? '_blank' : '_self'}
              rel={external ? 'noopener noreferrer' : null}
            >
              <ListItemText primary={translate(key)} />
            </ListItem>
          ))}
        </List>
      </MuiDrawer>
    </Hidden>
  );
};

Drawer.displayName = 'Drawer';

export default Drawer;
