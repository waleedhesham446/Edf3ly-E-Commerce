import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    gridContainer: {
        flexDirection: 'column',
        // position: 'fixed',
        // maxWidth: '100%'
    },
    filterItem: {
        padding: '5px',
        marginBottom: '10px',
        border: '1px solid #05abda',
        maxWidth: '100%',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '10px',
            paddingRight: '10px',
        },
    },
}));