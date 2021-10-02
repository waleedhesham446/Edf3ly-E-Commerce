import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    marginBottom: '50px'
  },
  card: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30%',
      // flex-basis: 50%;
      marginBottom: '15px',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
    marginBottom: '50px'
  }
}));