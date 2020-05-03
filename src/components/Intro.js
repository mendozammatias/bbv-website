import React from 'react';
import { Hero, CallToAction } from '@blackbox-vision/ui-components';
import { useTranslation } from '@hooks/useTranslation';
import theme from '@utils/theme';

const Intro = ({ id }) => {
  const translate = useTranslation();

  return (
    <Hero
      id={id}
      title={translate('intro.title')}
      subtitle={translate('intro.subtitle')}
      titleProps={{
        variant: 'h4',
        style: { color: theme.palette.secondary.main, fontWeight: 500 },
      }}
      subtitleProps={{
        variant: 'subtitle1',
        style: { color: theme.palette.secondary.main },
      }}
      clip="left"
    >
      <CallToAction
        component="a"
        href="/#contact-us"
        color="secondary"
        style={{ marginTop: 24, width: 200 }}
      >
        {translate('intro.cta')}
      </CallToAction>
    </Hero>
  );
};

Intro.displayName = 'Intro';

export default Intro;
