import React from 'react';
import NotFound from '@components/NotFound';
import Layout from '@layouts';

const NotFoundPage = (props) => (
  <Layout seo={props.seo}>
    <NotFound />
  </Layout>
);

NotFoundPage.displayName = 'NotFoundPage';
NotFoundPage.defaultProps = {
  seo: {
    lang: 'en',
    title: '404 Not Found - BlackBox Vision | Digital Agency',
    description:
      'Ups, something went wrong. The page you were looking for is not found',
    alUrl: 'mobileapp/home',
    openGraph: {
      type: 'website',
      locale: 'es_AR',
      title: '404 Not Found - BlackBox Vision | Digital Agency',
      description:
        'Ups, something went wrong. The page you were looking for is not found',
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

export default NotFoundPage;
