import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-evenly'
  },
  card: {
    maxWidth: '40%',
    marginBottom: '40px',
    boxShadow: '0px 20px 15px -3px black',
    [theme.breakpoints.down('md')]: {
      maxWidth: '45%',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90%',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  pagination: {
    left: '50%',
    position: 'relative',
    transform: 'translateX(-50%)',
    width: 'max-content',
    marginBottom: '20px',
  }
}));