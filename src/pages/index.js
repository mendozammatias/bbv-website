import React from 'react';

import Layout from '@layouts';
import How from '@components/How';
import What from '@components/What';
import Intro from '@components/Intro';
import ContactUs from '@components/ContactUs';
import SuccessStories from '@components/SuccessStories';
import Clients from '@components/Clients';

const Index = (props) => (
  <Layout seo={props.seo}>
    <Intro id="intro" />
    <What />
    <How />
    <SuccessStories />
    <Clients />
    <ContactUs id="contact-us" />
  </Layout>
);

Index.displayName = 'Index';

Index.defaultProps = {
  seo: {
    lang: 'en',
    title:
      'We are the Agency that will accompany you in the Digital Transformation of your Company - BlackBox Vision | Digital Agency',
    description: 'We provide creative solutions to the needs of our clients',
    canonical: process.env.GATSBY_SITE_URL,
    alUrl: 'mobileapp/home',
    keywords:
      'blackbox vision, blackbox, vision, vision blackbox, tech, technology, enterprise, home, javascript, react, react-native, native, redux, nextjs, graphql, gatsby, software development, software, digital, transformation, digital transformation, it, digital marketing, seo, advertising',
    openGraph: {
      type: 'website',
      locale: 'es_AR',
      url: process.env.GATSBY_SITE_URL,
      title:
        'We are the Agency that will accompany you in the Digital Transformation of your Company - BlackBox Vision | Digital Agency',
      description: 'We provide creative solutions to the needs of our clients',
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

export default Index;
