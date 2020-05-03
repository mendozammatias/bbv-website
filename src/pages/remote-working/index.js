import React from 'react';

import Layout from '@layouts/RemoteWorking';
import RemoteWorking from '@containers/RemoteWorking';

const RemoteWorkingPage = props => (
  <Layout seo={props.seo} location={props.location}>
    <RemoteWorking />
  </Layout>
);

RemoteWorkingPage.displayName = 'RemoteWorkingPage';

RemoteWorkingPage.defaultProps = {
  seo: {
    lang: 'en',
    title: 'Remote working - BlackBox Vision | Digital Agency',
    description:
      'We offer consulting on tools and tips that improve remote work.',
    canonical: `${process.env.GATSBY_SITE_URL}/remote-working`,
    keywords:
      'blackbox vision, blackbox, vision, vision blackbox, tech, technology, enterprise, home, remote, remote working, tools, javascript, react, react-native, native, redux, nextjs, graphql, gatsby, software development, software, digital, transformation, digital transformation, it, digital marketing, seo, advertising',
    openGraph: {
      type: 'website',
      locale: 'es_AR',
      url: `${process.env.GATSBY_SITE_URL}/remote-working`,
      title: 'Remote working - BlackBox Vision | Digital Agency',
      description:
        'We offer consulting on tools and tips that improve remote work.',
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

export default RemoteWorkingPage;
