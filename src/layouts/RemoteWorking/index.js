import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { MuiThemeProvider } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Grid } from '@material-ui/core';

import { Header, DarkModeProvider } from '@blackbox-vision/ui-components';
import theme from '@utils/theme/remoteWorking';
import Meta from '@components/Meta';
import Footer from '@components/Footer';
import RemoteWorkingLogo from '@components/RemoteWorkingLogo';
import RemoteWorkingMenu from '@components/RemoteWorkingMenu';
import { Routes } from '@constants/routes';
import './styles.css';

const RemoteWorkingLayout = ({ children, seo }) => {
  useEffect(() => {
    Aos.init({ duration: 450 });
  }, []);

  const menuItems = [
    {
      to: Routes.REMOTE_WORKING,
      label: 'remote_working.home',
      anchor: false,
      component: Link,
    },
    {
      to: Routes.TOOLS,
      label: 'remote_working.tools',
      anchor: false,
      component: Link,
    },
    {
      to: Routes.TIPS,
      label: 'remote_working.tips.label',
      anchor: false,
      component: Link,
    },
  ];

  return (
    <MuiThemeProvider theme={theme}>
      <Meta seo={seo} />
      <Header background="#F5F5F5" disableGutters>
        <Grid alignItems="center" container>
          <Grid xs={1} sm={1} md={1} lg={1} item />
          <Grid xs={9} sm={10} md={9} lg={5} item>
            <RemoteWorkingLogo />
          </Grid>
          <Grid xs={1} sm={1} md={1} lg={5} item>
            <RemoteWorkingMenu menu={menuItems} />
          </Grid>
          <Grid xs={1} sm={false} md={1} lg={1} item />
        </Grid>
      </Header>
      {children}
      <Footer />
      <Helmet>
        <script
          type="text/javascript"
          id="hs-script-loader"
          src="//js.hs-scripts.com/6416846.js"
          async
          defer
        />
      </Helmet>
    </MuiThemeProvider>
  );
};

RemoteWorkingLayout.displayName = 'RemoteWorkingLayout';

export default RemoteWorkingLayout;
