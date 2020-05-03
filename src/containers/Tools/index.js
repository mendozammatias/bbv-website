import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { useTranslation } from '@hooks/useTranslation';
import FreelancerImg from '@static/images/freelancer.png';
import Section from './components/Section';
import {
  communication,
  videocalls,
  design,
  organization,
  remoteDesktop,
  todoApps,
} from './constants';
import { styles } from './styles';

const Tools = props => {
  const translate = useTranslation();

  const { classes } = props;

  return (
    <Grid
      direction="column"
      alignItems="center"
      wrap="nowrap"
      className={classes.container}
      container
    >
      <Grid container>
        <Grid lg={1} md={1} item />
        <Grid lg={4} md={5} item>
          <img
            src={FreelancerImg}
            className={classes.heroImg}
            alt="freelancer"
          />
        </Grid>
        <Grid lg={5} md={5} item>
          <Typography variant="h2" className={classes.heroHeading}>
            {translate('remote_working.hero_heading')}
          </Typography>
          <Grid lg={1} md={1} item />
        </Grid>
      </Grid>

      <Section
        title={translate('remote_working.communication')}
        decorationColor="rgba(255, 136, 38, 0.3)"
        tools={communication}
      />
      <Section
        title={translate('remote_working.videocalls')}
        decorationColor="rgba(38, 147, 255, 0.4)"
        tools={videocalls}
      />
      <Section
        title={translate('remote_working.remote_desktop')}
        decorationColor="rgba(27, 173, 100, 0.4)"
        tools={remoteDesktop}
      />
      <Section
        title={translate('remote_working.organization')}
        decorationColor="rgba(109, 117, 241, 0.4)"
        tools={organization}
      />
      <Section
        title={translate('remote_working.todo_list')}
        decorationColor="rgba(251, 192, 20, 0.4)"
        tools={todoApps}
      />
      <Section
        title={translate('remote_working.design')}
        decorationColor="rgba(231, 96, 121, 0.4)"
        tools={design}
      />
    </Grid>
  );
};

Tools.displayName = 'Tools';

export default withStyles(styles)(Tools);
