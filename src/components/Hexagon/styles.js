import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  hexagon: {
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    height: 100,
    position: 'relative',
    textAlign: 'center',
    transition: 'background-color 0.5s ease',
    width: 200,
    zIndex: 0,

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '&:before': {
        borderBottomColor: theme.palette.primary.main,
      },
      '&:after': {
        borderTopColor: theme.palette.primary.main,
      },
    },
    '&:before, &:after': {
      position: 'absolute',
      content: '""',
      borderLeft: '100px solid transparent',
      borderRight: '100px solid transparent',
      left: 0,
      right: 0,
    },
    '&:before': {
      content: '""',
      transition: 'border-bottom-color 0.5s ease',
      bottom: '100%',
      borderBottom: `50px solid ${theme.palette.secondary.main}`,
    },
    '&:after': {
      content: '""',
      transition: 'border-top-color 0.5s ease',
      top: '100%',
      borderTop: `50px solid ${theme.palette.secondary.main}`,
    },
  },
  innerHexagon: {
    backgroundColor: '#F7F7F7',
    color: theme.palette.common.white,
    cursor: 'pointer',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: 100,
    position: 'relative',
    textAlign: 'center',
    transition: 'background-color 0.5s ease',
    transform: 'scale(0.96)',
    width: 200,
    zIndex: 1,
    '&:before, &:after': {
      position: 'absolute',
      content: '""',
      borderLeft: '100px solid transparent',
      borderRight: '100px solid transparent',
      left: 0,
      right: 0,
    },
    '&:before': {
      content: '""',
      transition: 'border-bottom-color 0.5s ease',
      bottom: '100%',
      borderBottom: `50px solid #F7F7F7`,
      marginBottom: -1,
    },
    '&:after': {
      content: '""',
      transition: 'border-top-color 0.5s ease',
      top: '100%',
      borderTop: `50px solid #F7F7F7`,
      marginTop: -1,
    },
  },
  logo: {
    marginBottom: 0,
    padding: theme.spacing(2),
  },
}));
