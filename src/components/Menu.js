import React from 'react';
import { Hidden } from '@material-ui/core';
import { useTranslation } from '@hooks/useTranslation';
import ToggleLanguage from '@components/ToggleLanguage';

import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

const Menu = ({ menu }) => {
  const translate = useTranslation();

  const menuItems = menu.map(item => ({
    ...item,
    label: translate(item.label),
  }));

  return (
    <>
      <MenuDesktop menu={menuItems} />
      <MenuMobile menu={menuItems} />
      <Hidden mdDown>
        <ToggleLanguage />
      </Hidden>
    </>
  );
};

Menu.displayName = 'Menu';

export default Menu;
