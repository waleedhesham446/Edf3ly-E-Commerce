import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    button: {
        color: 'red',
        fontWeight: '600',
    },
    rating: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '0',
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            left: '-20px',
        },
    },
    filterHead: {
        margin: '10px 0',
        fontSize: 'large',
    },
    mainContainer: {
        [theme.breakpoints.down('sm')]: {
            padding: '0 10px',
        },
    }
}));