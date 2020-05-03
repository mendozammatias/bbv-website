export const styles = theme => ({
  container: {
    backgroundColor: '#F5F5F5',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  heroImg: {
    height: 260,
    marginTop: theme.spacing(9),
    minWidth: 245,
  },
  heroHeading: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4),
      textAlign: 'center',
    },
  },
  tipsContainer: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4),
    },
  },
  btn: {
    borderRadius: theme.spacing(4),
    color: '#5C5C5C',
    fontSize: '2rem',
    height: 274,
    margin: '0 0 32px',
    width: '100%',
    transition: 'all .4s cubic-bezier(0.4, 0, 0.2, 1)',
    [theme.breakpoints.down('xs')]: {
      minHeight: 300,
    },
  },
  workspace: {
    backgroundColor: 'rgba(109, 117, 241, 0.4)',
    borderRadius: '0 32px 32px 0',
    '&:hover': {
      backgroundColor: 'rgba(109, 117, 241, 0.6)',
      color: '#F0F0F0',
    },
    [theme.breakpoints.down('xs')]: {
      borderRadius: theme.spacing(4),
    },
  },
  agenda: {
    backgroundColor: 'rgba(231, 96, 121, 0.4)',
    '&:hover': {
      backgroundColor: 'rgba(231, 96, 121, 0.6)',
      color: '#F0F0F0',
    },
  },
  communication: {
    backgroundColor: 'rgba(255, 136, 38, 0.3)',
    '&:hover': {
      backgroundColor: 'rgba(255, 136, 38, 0.6)',
      color: '#F0F0F0',
    },
  },
  teamBuilding: {
    backgroundColor: 'rgba(38, 147, 255, 0.4)',
    borderRadius: '32px 0 0 32px',
    '&:hover': {
      backgroundColor: 'rgba(38, 147, 255, 0.6)',
      color: '#F0F0F0',
    },
    [theme.breakpoints.down('xs')]: {
      borderRadius: theme.spacing(4),
    },
  },
  organization: {
    backgroundColor: 'rgba(252, 240, 104, 0.4)',
    borderRadius: '0 32px 32px 0',
    '&:hover': {
      backgroundColor: 'rgba(252, 240, 104, 0.6)',
    },
    [theme.breakpoints.down('xs')]: {
      borderRadius: theme.spacing(4),
    },
  },
  more: {
    backgroundColor: 'rgba(29, 114, 121, 0.4)',
    borderRadius: '0 32px 32px 0',
    '&:hover': {
      backgroundColor: 'rgba(29, 114, 121, 0.6)',
      color: '#F0F0F0',
    },
    [theme.breakpoints.down('xs')]: {
      borderRadius: theme.spacing(4),
    },
  },
  dialogContent: {
    [theme.breakpoints.down('xs')]: {
      overflowY: 'scroll',
    },
  },
  list: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
  listItem: {
    color: theme.palette.common.white,
    margin: '0 auto',
    maxWidth: 600,
  },
  focusInExpand: {
    '-webkit-animation':
      'focusInExpand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
    animation:
      'focusInExpand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
  },
  '@-webkit-keyframes focusInExpand': {
    from: {
      letterSpacing: '-0.5em',
      '-webkit-filter': 'blur(12px)',
      filter: 'blur(12px)',
      opacity: 0,
    },
    to: {
      '-webkit-filter': 'blur(0)',
      filter: 'blur(0)',
      opacity: 1,
    },
  },
  '@keyframes focusInExpand': {
    from: {
      letterSpacing: '-0.5em',
      '-webkit-filter': 'blur(12px)',
      filter: 'blur(12px)',
      opacity: 0,
    },
    to: {
      '-webkit-filter': 'blur(0)',
      filter: 'blur(0)',
      opacity: 1,
    },
  },
});
