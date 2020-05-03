import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import Aos from 'aos';
import 'aos/dist/aos.css';
import BbvLogo from '@static/logo/header-logo.light.png';

import theme from '@utils/theme';
import { Header, DarkModeProvider } from '@blackbox-vision/ui-components';
import Footer from '@components/Footer';
import Meta from '@components/Meta';
import Menu from '@components/Menu';
import Link from '@components/Link';
import { useSmoothScroll } from '@hooks/useSmoothScroll';
import { Routes } from '@constants/routes';
import { menuItems } from '@constants/layout';

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
  },
  logo: {
    marginBottom: 0,
    height: 32,
    width: 250,
  },
}));

const Layout = ({ children, seo }) => {
  useSmoothScroll();

  useEffect(() => {
    Aos.init({ duration: 450 });
  }, []);

  const classes = useStyles();

  return (
    <DarkModeProvider>
      <ThemeProvider theme={theme}>
        <Meta seo={seo} />
        <Header>
          <Link to={Routes.HOME} className={classes.logoContainer}>
            <img alt="blackbox logo" src={BbvLogo} className={classes.logo} />
          </Link>
          <Menu menu={menuItems} />
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
      </ThemeProvider>
    </DarkModeProvider>
  );
};

Layout.defaultProps = {
  translatable: true,
};

Layout.displayName = 'Layout';

export default Layout;
