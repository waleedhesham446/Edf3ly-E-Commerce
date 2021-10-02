import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      borderRadius: '5px',
    },
  },
  title: {
    padding: '5px 16px 0',
    [theme.breakpoints.down('md')]: {
      fontSize: '20px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px'
    },
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
    height: '100%'
  },
  selectedCard: {
    border: '5px solid #05abda'
  }
}));