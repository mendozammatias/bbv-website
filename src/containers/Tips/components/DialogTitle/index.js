import React from 'react';
import {
  DialogTitle as MuiDialogTitle,
  IconButton,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import { styles } from './styles';

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...rest } = props;
  return (
    <MuiDialogTitle className={classes.root} {...rest} disableTypography>
      <Typography className={classes.title} variant="h6">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

DialogTitle.displayName = 'DialogTitle';

export default DialogTitle;
