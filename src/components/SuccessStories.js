import React from 'react';
import LazyLoad from 'react-lazyload';
import { Grid, Typography, Container, makeStyles } from '@material-ui/core';
import { useTranslation } from '@hooks/useTranslation';
import Slide from './Slide';

const useStyles = makeStyles((theme) => ({
  container: {
    height: 1000,
  },
  flourishImage: {
    border: 'none',
    borderRadius: 4,
    boxShadow: theme.shadows[2],
    padding: 8,
    [theme.breakpoints.down('sm')]: {
      border: '1px solid #E0E0E0',
      borderRadius: 4,
      boxShadow: theme.shadows[0],
      margin: 16,
      height: 200,
      width: 'calc(100% - 32px)',
    },
  },
}));

const SucessStories = () => {
  const translate = useTranslation();
  const classes = useStyles();

  return (
    <Container id="success" maxWidth="md">
      <Grid
        direction="row"
        alignItems="center"
        alignContent="center"
        spacing={2}
        className={classes.container}
        container
      >
        <Grid xs={12} sm={12} md={12} item>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="250"
            paragraph
          >
            {translate(`success.title`)}
          </Typography>
        </Grid>
        <Grid xs={12} sm={12} md={12} item>
          <LazyLoad offset={200} once>
            <Slide
              flourishImage={
                <iframe
                  title={translate(`success.projects.acercando-naciones.title`)}
                  src="https://public.flourish.studio/visualisation/317557/embed"
                  className={classes.flourishImage}
                  width="100%"
                  height="300px"
                  frameBorder="0"
                />
              }
              btnMore={translate(
                `success.projects.acercando-naciones.btn-more`
              )}
              title={translate(`success.projects.acercando-naciones.title`)}
              description={translate(
                `success.projects.acercando-naciones.description`
              )}
              tags={[
                translate(`success.projects.acercando-naciones.tags.design`),
                translate(`success.projects.acercando-naciones.tags.web`),
                translate(
                  `success.projects.acercando-naciones.tags.technologies`
                ),
              ]}
            />
          </LazyLoad>
        </Grid>
      </Grid>
    </Container>
  );
};

SucessStories.displayName = 'SucessStories';

export default SucessStories;
