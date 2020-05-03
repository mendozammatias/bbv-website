import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Grid, Typography } from '@material-ui/core';
import { SectionCard } from '@blackbox-vision/ui-components';
import { useTranslation } from '@hooks/useTranslation';
import { useStyles } from './styles';

const What = (props) => {
  const translate = useTranslation();
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query WhatImages {
      development: cloudinaryMedia(
        public_id: { eq: "website-images/development_mghhuq" }
      ) {
        secure_url
      }
      consultancy: cloudinaryMedia(
        public_id: { eq: "website-images/consultancy_eonpd4" }
      ) {
        secure_url
      }
      trainings: cloudinaryMedia(
        public_id: { eq: "website-images/trainings_vhv2i3" }
      ) {
        secure_url
      }
    }
  `);

  return (
    <Container id="what" maxWidth="md">
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="250"
            gutterBottom
          >
            {translate(`what.title`)}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="500"
            gutterBottom
          >
            {translate(`what.subtitle`)}
          </Typography>
          <Grid direction="row" spacing={0} container>
            <Grid item xs={12} sm={12} md={4}>
              <SectionCard
                image={data.development.secure_url}
                title={translate(`what.development.title`)}
                description={translate(`what.development.description`)}
                cardClassName={classes.card}
                imgClassName={classes.cardImg}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <SectionCard
                image={data.consultancy.secure_url}
                title={translate(`what.consultancy.title`)}
                description={translate(`what.consultancy.description`)}
                cardClassName={classes.card}
                imgClassName={classes.cardImg}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <SectionCard
                image={data.trainings.secure_url}
                title={translate(`what.training.title`)}
                description={translate(`what.training.description`)}
                cardClassName={classes.card}
                imgClassName={classes.cardImg}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

What.displayName = 'What';

export default What;
