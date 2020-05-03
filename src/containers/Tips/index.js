import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import {
  Dialog,
  DialogContent,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
} from '@material-ui/core';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

import { withStyles } from '@material-ui/core/styles';

import DesktopPersonImg from '@static/images/desktop-person.png';
import { useTranslation } from '@hooks/useTranslation';
import TipButton from './components/TipButton';
import DialogTitle from './components/DialogTitle';
import {
  workspaceTips,
  agendaTips,
  communicationTips,
  teamBuildingTips,
  organizationTips,
} from './constants';
import { styles } from './styles';

const Tips = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#5C5C5C');
  const [title, setTitle] = useState('tips');
  const [tips, setTips] = useState([]);
  const [direction, setDirection] = useState('left');
  const [color, setColor] = useState('#F0F0F0');

  const translate = useTranslation();

  const handleClick = useCallback((tips, color, title, dir, textColor) => {
    setTips(tips);
    setTitle(title);
    setBackgroundColor(color);
    setDirection(dir);
    setColor(textColor);
    setOpen(true);
  }, []);

  return (
    <>
      <Grid
        direction="column"
        alignItems="center"
        wrap="nowrap"
        className={clsx(classes.container)}
        container
      >
        <Grid className={classes.tipsContainer} container>
          {/* Hero row */}
          <Grid lg={1} md={1} sm={1} xs={false} item />
          <Grid lg={5} md={5} sm={6} xs={12} item>
            <Typography variant="h2" className={classes.heroHeading}>
              {translate('remote_working.tips.heading')}
            </Typography>
          </Grid>
          <Grid lg={5} md={5} sm={4} xs={12} item>
            <div className={classes.imgContainer}>
              <img
                src={DesktopPersonImg}
                className={classes.heroImg}
                alt="desktop person"
              />
            </div>
          </Grid>
          <Grid lg={1} md={1} sm={1} xs={false} item />

          {/* First row */}
          <Grid container>
            <Grid lg={6} md={6} sm={6} xs={12} item>
              <TipButton
                className={clsx(
                  classes.btn,
                  classes.workspace,
                  classes.focusInExpand
                )}
                onClick={() =>
                  handleClick(
                    workspaceTips,
                    'rgba(109, 117, 241, 0.6)',
                    'remote_working.workspace',
                    'right',
                    '#F0F0F0'
                  )
                }
              >
                {translate('remote_working.workspace')}
              </TipButton>
            </Grid>
            <Grid lg={1} md={1} sm={1} xs={false} item />
            <Grid lg={4} md={4} sm={4} xs={12} item>
              <TipButton
                className={clsx(
                  classes.btn,
                  classes.agenda,
                  classes.focusInExpand
                )}
                onClick={() =>
                  handleClick(
                    agendaTips,
                    'rgba(231, 96, 121, 0.6)',
                    'remote_working.agenda',
                    'left',
                    '#F0F0F0'
                  )
                }
              >
                {translate('remote_working.agenda')}
              </TipButton>
            </Grid>
            <Grid lg={1} md={1} sm={1} xs={false} item />

            {/* Second row */}
            <Grid lg={1} md={1} sm={1} xs={false} item />
            <Grid lg={3} md={3} sm={3} xs={12} item>
              <TipButton
                className={clsx(
                  classes.btn,
                  classes.communication,
                  classes.focusInExpand
                )}
                onClick={() =>
                  handleClick(
                    communicationTips,
                    'rgba(255, 136, 38, 0.6)',
                    'remote_working.communication',
                    'right',
                    '#F0F0F0'
                  )
                }
              >
                {translate('remote_working.communication')}
              </TipButton>
            </Grid>
            <Grid lg={1} md={1} sm={1} xs={false} item />
            <Grid lg={7} md={7} sm={7} xs={12} item>
              <TipButton
                className={clsx(
                  classes.btn,
                  classes.teamBuilding,
                  classes.focusInExpand
                )}
                onClick={() =>
                  handleClick(
                    teamBuildingTips,
                    'rgba(38, 147, 255, 0.6)',
                    'remote_working.team_building',
                    'left',
                    '#F0F0F0'
                  )
                }
              >
                {translate('remote_working.team_building')}
              </TipButton>
            </Grid>

            {/* Third row */}
            <Grid lg={7} md={7} sm={7} xs={12} item>
              <TipButton
                className={clsx(
                  classes.btn,
                  classes.more,
                  classes.focusInExpand
                )}
                onClick={() => {
                  handleClick(
                    organizationTips,
                    'rgba(29, 114, 121, 0.6)',
                    'remote_working.organization',
                    'right',
                    '#F0F0F0'
                  );
                }}
              >
                {translate('remote_working.organization')}
              </TipButton>
            </Grid>
            <Grid lg={4} md={4} sm={4} xs={false} item />
            <Grid lg={1} md={1} sm={1} xs={false} item />
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Slide}
        fullScreen
        TransitionProps={{ direction }}
      >
        <DialogTitle
          style={{ backgroundColor }}
          aria-label="Close"
          onClose={() => setOpen(false)}
        >
          <span style={{ color }}>{translate(title)}</span>
        </DialogTitle>
        <DialogContent
          style={{ backgroundColor }}
          className={classes.dialogContent}
        >
          <List className={classes.list} dense>
            {tips &&
              tips.map(tip => (
                <ListItem className={classes.listItem}>
                  <ListItemIcon>
                    <CheckCircleRoundedIcon style={{ color }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body1" style={{ color }}>
                      {translate(tip)}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};

Tips.displayName = 'Tips';

export default withStyles(styles)(Tips);
