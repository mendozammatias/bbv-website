import React from 'react';
import { Hidden } from '@material-ui/core';
import { MenuItem } from '@blackbox-vision/ui-components';

const MyMenuDesktop = ({ menu }) => (
  <Hidden only={['xs', 'sm']} implementation="css">
    <nav>
      {menu.map((item, idx) => (
        <MenuItem {...item} key={`menu_${idx}`} />
      ))}
    </nav>
  </Hidden>
);

MyMenuDesktop.displayName = 'MyMenuDesktop';

export default MyMenuDesktop;
