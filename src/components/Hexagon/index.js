import React from 'react';
import Link from '@components/Link';
import { useStyles } from './styles';

const Hexagon = ({ alt, logo, to }) => {
  const classes = useStyles();

  return (
    <Link to={to} target="_blank" rel="noopener noreferrer" external>
      <div className={classes.hexagon}>
        <div className={classes.innerHexagon}>
          <img alt={alt} src={logo} className={classes.logo} />
        </div>
      </div>
    </Link>
  );
};

Hexagon.defaultProps = {
  disableMarginTop: false,
};

Hexagon.displayName = 'Hexagon';

export default Hexagon;
