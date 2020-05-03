import React, { useState } from 'react';
import { IconButton, Hidden } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { MenuMobile } from '@blackbox-vision/ui-components';

const MyMenuMobile = ({ menu }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const menuItems = menu.map(item => ({
    ...item,
    href: item.to,
  }));

  return (
    <>
      <Hidden only={['xs', 'sm', 'md', 'lg']}>
        <IconButton onClick={toggleMenu}>
          <MenuRoundedIcon color="secondary" />
        </IconButton>
      </Hidden>
      <MenuMobile open={open} toggleMenu={toggleMenu} menu={menuItems} />
    </>
  );
};

MyMenuMobile.displayName = 'MyMenuMobile';

export default MyMenuMobile;
