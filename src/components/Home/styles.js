import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  gridContainer: {
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  productsContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  mainContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: '0 16px',
    },
  }
}));