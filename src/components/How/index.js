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
    query HowImages {
      needs: cloudinaryMedia(public_id: { eq: "website-images/needs_alzirw" }) {
        secure_url
      }
      design: cloudinaryMedia(
        public_id: { eq: "website-images/design_qqhwcb" }
      ) {
        secure_url
      }
      agile: cloudinaryMedia(public_id: { eq: "website-images/agile_au7pee" }) {
        secure_url
      }
      management: cloudinaryMedia(
        public_id: { eq: "website-images/management_oc8hmt" }
      ) {
        secure_url
      }
    }
  `);

  return (
    <section className={classes.section}>
      <Container id="how" maxWidth="md" className={classes.container}>
        <Grid
          alignItems="center"
          alignContent="center"
          className={classes.container}
          container
        >
          <Grid xs={12} item>
            <Typography
              variant="h4"
              align="center"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="250"
              gutterBottom
            >
              {translate(`how.title`)}
            </Typography>
            <Grid direction="row" spacing={0} container>
              <Grid xs={12} sm={6} md={6} lg={3} item>
                <SectionCard
                  image={data.needs.secure_url}
                  title={translate(`how.methodology.first.title`)}
                  description={translate(`how.methodology.first.description`)}
                  cardClassName={classes.card}
                  imgClassName={classes.cardImg}
                />
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={3} item>
                <SectionCard
                  image={data.design.secure_url}
                  title={translate(`how.methodology.second.title`)}
                  description={translate(`how.methodology.second.description`)}
                  cardClassName={classes.card}
                  imgClassName={classes.cardImg}
                />
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={3} item>
                <SectionCard
                  image={data.agile.secure_url}
                  title={translate(`how.methodology.third.title`)}
                  description={translate(`how.methodology.third.description`)}
                  cardClassName={classes.card}
                  imgClassName={classes.cardImg}
                />
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={3} item>
                <SectionCard
                  image={data.management.secure_url}
                  title={translate(`how.methodology.fourth.title`)}
                  description={translate(`how.methodology.fourth.description`)}
                  cardClassName={classes.card}
                  imgClassName={classes.cardImg}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

What.displayName = 'What';

export default What;
