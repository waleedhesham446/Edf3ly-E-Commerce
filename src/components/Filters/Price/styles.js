import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    inputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    inputField: {
        width: '30%',
        borderColor: '#05abda',
    },
    button: {
        color: 'red',
        fontWeight: '600',
    },
    filterHead: {
        margin: '10px 0',
        fontSize: 'large',
    }
}));