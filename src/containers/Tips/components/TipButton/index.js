import React from 'react';
import { Button } from '@material-ui/core';

const TipButton = ({ classes, className, onClick, children }) => (
  <Button
    data-aos="fade-up"
    data-aos-once="true"
    className={className}
    onClick={onClick}
    disableFocusRipple
    style={{ transition: 'all .4s cubic-bezier(0.4, 0, 0.2, 1)' }}
  >
    {children}
  </Button>
);

TipButton.displayName = 'TipButton';

export default TipButton;
