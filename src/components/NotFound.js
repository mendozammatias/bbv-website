import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { NotFoundCard } from '@blackbox-vision/ui-components';
import { useTranslation } from '@hooks/useTranslation';
import { Routes } from '@constants/routes';

const NotFound = (props) => {
  const translate = useTranslation();

  const data = useStaticQuery(graphql`
    query NotFoundImages {
      error: cloudinaryMedia(public_id: { eq: "website-images/error_yr02wf" }) {
        secure_url
      }
    }
  `);

  return (
    <NotFoundCard
      id="error"
      component={Link}
      to={Routes.HOME}
      image={data.error.secure_url}
      message={translate('error.message')}
      btnLabel={translate('error.btn')}
    />
  );
};

NotFound.displayName = 'NotFound';

export default NotFound;
