import ToolsImg from '@static/images/tools.png';
import TipsImg from '@static/images/tips.png';

export const styles = theme => ({
  container: {
    backgroundColor: '#F5F5F5',
  },
  introSection: {
    [theme.breakpoints.up('md')]: {
      height: 'calc(100vh - 67px)',
    },
  },
  heading: {
    marginTop: '3rem',
    [theme.breakpoints.down('sm')]: {
      margin: '5rem 0 1rem',
      textAlign: 'center',
    },
  },
  panel: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#115664',
    borderRadius: '24px 0 0 24px',
    padding: 24,
  },
  title: {
    color: '#FFF',
    marginBottom: '1rem',
  },
  description: {
    color: '#FFF',
    margin: '16px 0',
  },
  cta: {
    backgroundColor: '#C5FFE4',
    boxShadow: '0 4px 40px rgba(0, 0, 0, 0.4)',
    borderRadius: 16,
    height: 69,
    position: 'relative',
    top: 50,
    right: 130,
    width: 235,
    [theme.breakpoints.only('sm')]: {
      margin: '8px 48px 0 24px',
      right: 0,
      top: 50,
    },
    [theme.breakpoints.down('xs')]: {
      right: 0,
      top: 40,
    },
  },
  ctaLabel: {
    color: '#404040',
    height: 30,
    fontSize: 18,
    fontWeight: 300,
    letterSpacing: '0.125em',
  },
  tools: {
    background: `url(${ToolsImg}) center/100% no-repeat`,
  },
  tips: {
    background: `url(${TipsImg}) center/100% no-repeat`,
  },
  cardContainer: {
    [theme.breakpoints.up('md')]: {
      margin: '5rem 0',
    },
    [theme.breakpoints.only('md')]: {
      padding: '48px 0 0',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '24px',
    },
  },
  cardSeparator: {
    [theme.breakpoints.up('sm')]: {
      marginRight: 32,
    },
  },
  card: {
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: theme.palette.common.white,
    boxShadow: '0 4px 40px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    justifyContent: 'center',
    height: 179,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      height: 120,
    },
    [theme.breakpoints.down('sm')]: {
      height: 75,
      margin: '48px auto 0',
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      height: 65,
      margin: '32px auto 0',
    },
  },
  link: {
    display: 'flex',
    justifyContent: 'flex-end',
    textDecoration: 'none',
  },
  formContainer: {
    padding: '4rem 0 24px',
    background: 'linear-gradient(45deg, #b9eee3 0%, #5cd2b9 100%)',
    '-webkit-clip-path': 'polygon(0 12%, 100% 0, 100% 100%, 0 100%)',
    'clip-path': 'polygon(0 12%, 100% 0, 100% 100%, 0 100%)',
    [theme.breakpoints.down('md')]: {
      '-webkit-clip-path': 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)',
      'clip-path': 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)',
    },
  },
});
