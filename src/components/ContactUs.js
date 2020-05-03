import React, { useState } from 'react';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import { Hero, ContactForm } from '@blackbox-vision/ui-components';
import { useTranslation } from '@hooks/useTranslation';
import { validateForm } from '@utils/validations';
import { HUBSPOT_API_URL } from '@constants/app';

const ContactUs = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sended, setSended] = useState(false);

  const translate = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleSubmit = async ctx => {
    setLoading(true);
    const res = await fetch(HUBSPOT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        context: {
          pageUri: window.location.href,
          pageName: document.querySelector('title').text,
        },
        fields: Object.entries(ctx).map(([name, value]) => ({
          name,
          value,
        })),
      }),
    });
    setLoading(false);
    if (res === 'ok') {
      setError(false);
      setSended(true);
    } else {
      setError(true);
      setSended(false);
    }
  };

  return (
    <Hero
      id={id}
      title={translate('contact.title')}
      subtitle={translate('contact.subtitle')}
      titleProps={{
        variant: 'h4',
        style: { fontWeight: 500 },
      }}
      subtitleProps={{
        variant: 'subtitle1',
      }}
      height={isMobile && '860px'}
      clip="none"
    >
      <Grid container style={{ marginBottom: 56 }}>
        <Grid xs={12} sm={12} md={3} item />
        <Grid xs={12} sm={12} md={6} item>
          <ContactForm
            title={translate('contact.form.title')}
            emailLabel={translate(`contact.form.email`)}
            messageLabel={translate(`contact.form.message`)}
            submitButtonLabel={translate(`contact.form.send`)}
            retryButtonLabel={translate(`contact.form.retry`)}
            onSubmit={handleSubmit}
            validate={validateForm}
            loading={loading}
            sended={sended}
            error={error}
          />
        </Grid>
        <Grid xs={12} sm={12} md={3} item />
      </Grid>
    </Hero>
  );
};

ContactUs.displayName = 'ContactUs';

export default ContactUs;
