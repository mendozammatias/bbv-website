import React from 'react';
import { Button, Chip, Grid, Typography, makeStyles } from '@material-ui/core';
import Link from '@components/Link';

const useStyles = makeStyles((theme) => ({
  image: {
    height: 250,
    display: 'flex',
    objectFit: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('md')]: {
      height: 100,
      width: '100%',
      objectFit: 'contain',
    },
  },
  tag: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    margin: theme.spacing(),
  },
}));

const Slide = ({
  image,
  title,
  description,
  tags = [],
  flourishImage,
  btnMore,
}) => {
  const classes = useStyles();
  return (
    <Grid
      alignContent="center"
      justify="center"
      alignItems="center"
      direction="row"
      spacing={4}
      container
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="500"
      >
        {image && <img src={image} alt={title} className={classes.image} />}
        {flourishImage && flourishImage}
      </Grid>
      <Grid xs={12} sm={12} md={6} item style={{ textAlign: 'center' }}>
        <Typography
          component={Link}
          variant="h6"
          align="center"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="600"
          external
          to="https://acercandonaciones.com"
          target="_blank"
          rel="noopener noreferrer"
          paragraph
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          component="p"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="700"
          paragraph
        >
          {description}
        </Typography>
        {tags.map((tag, idx) => (
          <Chip
            key={`tag_${idx}`}
            label={tag}
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="250"
            className={classes.tag}
          />
        ))}
        <Grid item>
          <Button
            component={Link}
            color="primary"
            variant="outlined"
            to="https://blog.blackbox-vision.tech/a-tale-of-digital-transformation-at-acercando-naciones"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="900"
            style={{
              marginTop: 16,
              borderRadius: 50,
              border: '2px solid',
            }}
            external
          >
            {btnMore}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

Slide.displayName = 'Slide';

export default Slide;
