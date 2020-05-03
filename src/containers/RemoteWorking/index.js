import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { Routes } from '@constants/routes';
import { useTranslation } from '@hooks/useTranslation';
import ContactUs from '@components/ContactUs';
import Link from '@components/Link';
import { styles } from './styles';

const RemoteWorking = props => {
  const translate = useTranslation();
  const { classes } = props;

  return (
    <Grid
      className={classes.container}
      direction="column"
      wrap="nowrap"
      container
    >
      <Grid container>
        <Grid component="section" className={classes.introSection} container>
          <Grid lg={1} md={1} sm={1} xs={1} item />
          <Grid
            lg={10}
            md={10}
            sm={10}
            xs={10}
            item
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography variant="h5" className={classes.heading}>
              {translate('remote_working.heading')}
            </Typography>
          </Grid>
          <Grid lg={1} md={1} sm={1} xs={1} item />
          <Grid lg={3} md={3} item />
          <Grid
            lg={9}
            md={9}
            item
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <div className={classes.panel}>
              <Typography variant="h4" className={classes.title}>
                {translate('remote_working.title')}
              </Typography>
              <Typography className={classes.description}>
                {translate('remote_working.description')}
              </Typography>
              <Link
                to={`${Routes.REMOTE_WORKING}#contact`}
                className={classes.link}
              >
                <Button
                  color="primary"
                  variant="contained"
                  classes={{ label: classes.ctaLabel }}
                  className={classes.cta}
                >
                  {translate('remote_working.cta_label')}
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
        <Grid md={1} sm={1} xs={false} item />
        <Grid md={5} sm={5} xs={12} item>
          <div className={clsx(classes.cardContainer, classes.cardSeparator)}>
            <Button
              data-aos="fade-up"
              data-aos-once="true"
              className={clsx(classes.card, classes.tools)}
            >
              <Link to={Routes.TOOLS} className={classes.link}>
                <Typography color="secondary" variant="h4">
                  {translate('remote_working.tools')}
                </Typography>
              </Link>
            </Button>
          </div>
        </Grid>
        <Grid md={5} sm={5} xs={12} item>
          <div className={classes.cardContainer}>
            <Button
              data-aos="fade-up"
              data-aos-once="true"
              className={clsx(classes.card, classes.tips)}
            >
              <Link to={Routes.TOOLS} className={classes.link}>
                <Typography color="secondary" variant="h4">
                  {translate('remote_working.tips.label')}
                </Typography>
              </Link>
            </Button>
          </div>
        </Grid>
        <Grid md={1} sm={1} xs={false} item />
      </Grid>
      <ContactUs id="contact" />
    </Grid>
  );
};

RemoteWorking.displayName = 'RemoteWorking';

export default withStyles(styles)(RemoteWorking);
