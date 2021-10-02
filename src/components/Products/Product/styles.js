import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  card: {
    // width: '80%',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // borderRadius: '15px',
    height: '100%',
    // position: 'relative',
  },
  title: {
    padding: '10px 16px',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  centerText: {
    textAlign: 'center',
  },
  centerRating: {
    left: '50%',
    transform: 'translateX(-50%)',
  },
});