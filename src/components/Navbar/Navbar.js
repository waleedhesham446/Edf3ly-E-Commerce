import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppBar } from '@material-ui/core';

import { CHANGE_CATEGORY_ID } from '../../constants';
import useStyles from './styles';
import logo from '../../images/logo.png';

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch({ type: CHANGE_CATEGORY_ID, payload: 1 });
    }

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Link className={classes.brandContainer} to='/' onClick={handleClick}>
                <img src={ logo } alt="icon" height='80px'/>
            </Link>
        </AppBar>
    );
}
 
export default Navbar;