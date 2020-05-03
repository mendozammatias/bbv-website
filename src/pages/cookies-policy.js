import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Link from '@components/Link';
import Layout from '@layouts';

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(9, 2, 2),
  },
  lastUpdated: {
    fontWeight: 'bold',
  },
  link: {
    color: '#3CCFB0',
  },
  bold: {
    fontWeight: 'bold',
  },
}));

const CookiesPolicy = (props) => {
  const classes = useStyles();

  return (
    <Layout seo={props.seo}>
      <Container maxWidth="md">
        <div className={classes.paper}>
          <Typography align="center" component="h1" variant="h2" gutterBottom>
            Cookies Policy
          </Typography>
          <Typography variant="body2" className={classes.lastUpdated} paragraph>
            Last updated: April 28, 2019
          </Typography>
          <Typography paragraph>
            Blackbox Vision Website ("us", "we", or "our") uses cookies on the
            <Typography component="span" className={classes.bold}>
              {' '}
              https://www.blackbox-vision.tech/
            </Typography>{' '}
            website and the Blackbox Vision Website mobile application (the
            "Service"). By using the Service, you consent to the use of cookies.
          </Typography>
          <Typography paragraph>
            Our Cookies Policy explains what cookies are, how we use cookies,
            how third-parties we may partner with may use cookies on the
            Service, your choices regarding cookies and further information
            about cookies. This Cookies Policy for Blackbox Vision Website has
            been created with the help of{' '}
            <Link
              className={classes.link}
              to="https://termsfeed.com/cookies-policy-generator/"
              target="_blank"
              rel="noopener noreferrer"
              external
            >
              TermsFeed Cookie Policy Generator
            </Link>
            .
          </Typography>
          <Typography variant="h5" gutterBottom>
            What are cookies
          </Typography>
          <Typography paragraph>
            Cookies are small pieces of text sent by your web browser by a
            website you visit. A cookie file is stored in your web browser and
            allows the Service or a third-party to recognize you and make your
            next visit easier and the Service more useful to you.
          </Typography>
          <Typography paragraph>
            Cookies can be "persistent" or "session" cookies. Persistent cookies
            remain on your personal computer or mobile device when you go
            offline, while session cookies are deleted as soon as you close your
            web browser.
          </Typography>
          <Typography variant="h5" gutterBottom>
            How Blackbox Vision Website uses cookies
          </Typography>
          <Typography paragraph>
            When you use and access the Service, we may place a number of
            cookies files in your web browser. We use cookies for the following
            purposes:
          </Typography>
          <ul>
            <li>
              <Typography paragraph>
                To enable certain functions of the Service.
              </Typography>
            </li>
            <li>
              <Typography paragraph>
                We use both session and persistent cookies on the Service and we
                use different types of cookies to run the Service.
              </Typography>
            </li>
            <li>
              <Typography>
                We may use essential cookies to authenticate users and prevent
                fraudulent use of user accounts.
              </Typography>
            </li>
          </ul>
          <Typography variant="h5" gutterBottom>
            What are your choices regarding cookies
          </Typography>
          <Typography paragraph>
            If you'd like to delete cookies or instruct your web browser to
            delete or refuse cookies, please visit the help pages of your web
            browser. As an European citizen, under GDPR, you have certain
            individual rights. You can learn more about these rights in the{' '}
            <Link
              className={classes.link}
              to="https://termsfeed.com/blog/gdpr/#Individual_Rights_Under_the_GDPR"
              target="_blank"
              rel="noopener noreferrer"
              external
            >
              GDPR Guide
            </Link>
            .
          </Typography>
          <Typography paragraph>
            Please note, however, that if you delete cookies or refuse to accept
            them, you might not be able to use all of the features we offer, you
            may not be able to store your preferences, and some of our pages
            might not display properly.
          </Typography>
          <ul>
            <li>
              <Typography>
                For the Chrome web browser, please visit this page from Google:{' '}
                <Link
                  className={classes.link}
                  to="https://support.google.com/accounts/answer/32050"
                  target="_blank"
                  rel="noopener noreferrer"
                  external
                >
                  https://support.google.com/accounts/answer/32050
                </Link>
              </Typography>
            </li>
            <li>
              <Typography>
                For the Internet Explorer web browser, please visit this page
                from Microsoft:{' '}
                <Link
                  className={classes.link}
                  to="http://support.microsoft.com/kb/278835"
                  target="_blank"
                  rel="noopener noreferrer"
                  external
                >
                  http://support.microsoft.com/kb/278835
                </Link>
              </Typography>
            </li>
            <li>
              <Typography>
                For the Firefox web browser, please visit this page from
                Mozilla:{' '}
                <Link
                  className={classes.link}
                  to="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                  target="_blank"
                  rel="noopener noreferrer"
                  external
                >
                  https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                </Link>
              </Typography>
            </li>
            <li>
              <Typography>
                For the Safari web browser, please visit this page from Apple:{' '}
                <Link
                  className={classes.link}
                  to="https://support.apple.com/kb/PH21411?locale=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  external
                >
                  https://support.apple.com/kb/PH21411?locale=en_US
                </Link>
              </Typography>
            </li>
            <li>
              <Typography>
                For any other web browser, please visit your web browser's
                official web pages.
              </Typography>
            </li>
          </ul>
          <Typography variant="h5" gutterBottom>
            Where can you find more information about cookies
          </Typography>
          <Typography paragraph>
            You can learn more about cookies and the following third-party
            websites:
          </Typography>
          <ul>
            <li>
              <Typography>
                AllAboutCookies:{' '}
                <Link
                  className={classes.link}
                  to="http://www.allaboutcookies.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  external
                >
                  http://www.allaboutcookies.org/
                </Link>
              </Typography>
            </li>
            <li>
              <Typography>
                Network Advertising Initiative:{' '}
                <Link
                  className={classes.link}
                  to="http://www.networkadvertising.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  external
                >
                  http://www.networkadvertising.org/
                </Link>
              </Typography>
            </li>
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

CookiesPolicy.defaultProps = {
  seo: {
    lang: 'en',
    title: 'Cookies Policy - BlackBox Vision | Digital Agency',
    description: 'Our cookie policy to be spec compliant with GDPR',
    canonical: `${process.env.GATSBY_SITE_URL}/cookies-policy`,
    alUrl: 'mobileapp/home',
    openGraph: {
      type: 'website',
      locale: 'es_AR',
      url: `${process.env.GATSBY_SITE_URL}/cookies-policy`,
      title: 'Cookies Policy - BlackBox Vision | Digital Agency',
      description: 'Our cookie policy to be spec compliant with GDPR',
      defaultImageWidth: 1200,
      defaultImageHeight: 1200,
      images: [
        {
          url: `${process.env.GATSBY_SITE_URL}/logo/bbv-logo.jpeg`,
          width: 800,
          height: 600,
          alt: 'BBV Logo',
        },
      ],
      site_name: 'BlackBox Vision',
    },
    twitter: {
      site: '@blackbox_vision',
      handle: '@blackbox_vision',
      cardType: 'summary_large_image',
    },
  },
};

export default CookiesPolicy;
