import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useTranslation } from '@hooks/useTranslation';
import Hexagon from '@components/Hexagon';
import { useStyles } from './styles';

const Clients = () => {
  const translate = useTranslation();
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="md">
        <Typography
          color="secondary"
          variant="h4"
          align="center"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="250"
          gutterBottom
        >
          {translate('clients.title')}
        </Typography>
        <div className={classes.clientsContainer}>
          <div className={classes.hexagonList}>
            <Hexagon
              alt="Banco Galicia"
              logo="https://res.cloudinary.com/blackboxvision/image/upload/v1587333919/logo-images/galicia-logo_dubb7n.png"
              to="https://www.bancogalicia.com/banca/online/web/Personas"
            />
          </div>
          <div className={classes.hexagonList}>
            <Hexagon
              alt="Acercando Naciones"
              logo="https://res.cloudinary.com/blackboxvision/image/upload/h_100/v1587324179/logo-images/acercando-naciones-logo_i5xtxo.png"
              to="https://acercandonaciones.com/"
            />
          </div>
          <div className={classes.hexagonList}>
            <Hexagon
              alt="Natural Tech House"
              logo="https://res.cloudinary.com/blackboxvision/image/upload/h_135/v1587328679/logo-images/natural-tech-logo_qbryks.png"
              to="https://naturalth.it/"
            />
          </div>
          <div className={classes.hexagonList}>
            <Hexagon
              alt="UsaVisa Travel"
              logo="https://res.cloudinary.com/blackboxvision/image/upload/c_scale/v1587320956/logo-images/usavisa-logo_ukvvfn.webp"
              to="https://usavisa.com.ar/"
            />
          </div>
          <div className={classes.hexagonList}>
            <Hexagon
              alt="Hospital Aleman"
              logo="https://res.cloudinary.com/blackboxvision/image/upload/v1587329369/logo-images/hospital-aleman-logo_qw9sir.png"
              to="https://www.hospitalaleman.org.ar/"
            />
          </div>
          <div className={classes.hexagonList}>
            <Hexagon
              alt="Ingenia"
              logo="https://res.cloudinary.com/blackboxvision/image/upload/v1587330225/logo-images/ingenia-logo_dsoxkq.png"
              to="https://ingenia.la/"
            />
          </div>
          <div className={classes.hexagonList}>
            <Hexagon
              alt="Creadora Digital"
              logo="https://res.cloudinary.com/blackboxvision/image/upload/e_replace_color:A9A9A9:80:FFF/h_50,w_91/v1587323214/logo-images/creadora-digital-logo_pkelbc.png"
              to="https://www.creadoradigital.com/"
            />
          </div>
          <div className={classes.hexagonList}>
            <Hexagon
              alt="Fudex"
              logo="https://res.cloudinary.com/blackboxvision/image/upload/h_95/v1587342521/logo-images/image_pmrwn8.png"
              to="http://fudex.com.ar/"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

Clients.displayName = 'Clients';

export default Clients;
