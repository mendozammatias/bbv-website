import React from 'react';
import { Dialog } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

const TipsDialog = ({ open, onClose, Transition, children, ...rest }) => (
  <Dialog
    {...rest}
    open={open}
    onClose={onClose}
    TransitionComponent={Transition}
  >
    {children}
  </Dialog>
);

TipsDialog.displayName = 'TipsDialog';

export default withStyles(styles)(TipsDialog);
