import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    button: {
        color: 'red',
        fontWeight: '600',
    },
    checkBoxesContainer: {
        height: '200px',
        overflowY: 'scroll',
        flexWrap: 'nowrap',
    },
    colorSearchInput: {
        margin: '10px auto',
        left: '50%',
        transform: 'translateX(-50%)'
    },
    filterHead: {
        margin: '10px 0',
        fontSize: 'large',
    },
    mainContainer: {
        [theme.breakpoints.down('sm')]: {
            padding: '0 0 0 10px',
        },
    }
}));