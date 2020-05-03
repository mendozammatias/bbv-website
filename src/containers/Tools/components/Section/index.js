import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Link from '@components/Link';
import { styles } from './styles';

const Section = ({ classes, title, tools, decorationColor }) => (
  <Grid className={classes.container} container>
    <Grid lg={1} md={1} item />
    <Grid lg={10} md={10} xs={10} item>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <div
        style={{ backgroundColor: decorationColor || '#c5ffe4' }}
        className={classes.decoration}
      />
    </Grid>
    <Grid lg={1} md={1} item />

    <Grid justify="space-between" className={classes.itemsContainer} container>
      <Grid lg={1} md={1} sm={false} xs={false} item />
      {tools &&
        tools.map((tool, idx) => (
          <Grid key={`tool_${idx}`} lg={2} md={2} sm={6} xs={12} item>
            <Link
              to={tool.url}
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              external
            >
              <Grid
                className={classes.cardContainer}
                data-aos="fade-up"
                data-aos-once="true"
                direction="column"
                alignItems="center"
                container
              >
                <Button className={classes.card}>
                  <img src={tool.src} className={classes.cardImg} alt="tool" />
                </Button>
                <Typography align="center" variant="title">
                  {tool.title}
                </Typography>
              </Grid>
            </Link>
          </Grid>
        ))}

      <Grid lg={1} md={1} sm={false} xs={false} item />
    </Grid>
  </Grid>
);

Section.displayName = 'Section';

export default withStyles(styles)(Section);
