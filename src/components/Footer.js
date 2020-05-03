import React from 'react';
import { useTranslation as useI18n } from 'react-i18next';
import { Footer } from '@blackbox-vision/ui-components';
import { Button, Grid, makeStyles, Hidden } from '@material-ui/core';
import { useTranslation } from '@hooks/useTranslation';

const useStyles = makeStyles(theme => ({
  btn: {
    color: theme.palette.common.white,
    margin: theme.spacing(),
  },
}));

const MyFooter = props => {
  const translate = useTranslation();
  const { i18n } = useI18n();
  const classes = useStyles();

  return (
    <Footer
      copyright={`BlackBox Vision @${new Date().getFullYear()} - ${translate(
        'footer.copyright'
      )}`}
      LanguageButtons={
        <Hidden mdUp>
          <Grid alignItems="center" justify="center" container>
            <Grid item>
              <Button
                variant="text"
                onClick={() => i18n.changeLanguage('es')}
                aria-label={translate(`footer.language.es`)}
                className={classes.btn}
              >
                {translate(`footer.language.es`)}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                onClick={() => i18n.changeLanguage('en')}
                aria-label={translate(`footer.language.en`)}
                className={classes.btn}
              >
                {translate(`footer.language.en`)}
              </Button>
            </Grid>
          </Grid>
        </Hidden>
      }
    />
  );
};

MyFooter.displayName = 'Footer';

export default MyFooter;
