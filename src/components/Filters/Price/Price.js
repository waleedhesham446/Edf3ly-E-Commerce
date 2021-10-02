import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Slider, Typography, TextField, Container } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

import useStyles from './styles';

const Price = ({ value, setValue }) => {
    const classes = useStyles();
    //  max price
    const maxValue = useSelector(state => state.products.products).map(product => product.price).sort((a, b) => b - a)[0];

    //  handle changing the 'from' and 'to' input fields
    const handleChangeInput = (e) => {
        if(isNaN(parseInt(e.target.value))){
            //  input value is not a number
            e.target.id === 'from' ? setValue([0, value[1]]) : setValue([0, value[0]]);
        }else{
            //  valid input value
            const firstValue = parseInt(e.target.value) > maxValue ? maxValue : parseInt(e.target.value);   //  checking boundary value
            const secondValue = e.target.id === 'from' ? value[1] : value[0];
            const newValue = [firstValue, secondValue].sort((a, b) => a - b);
            setValue(newValue);
        }
    }

    const handleChangeSlider = (e, newValue) => setValue(newValue);

    //  checking value of input fields just after products are fetched
    useEffect(() => {
        if(maxValue && value[1] > maxValue) setValue([value[0], maxValue]);
        if(maxValue && value[0] > maxValue) setValue([Math.floor(maxValue/2), value[0]]);
    }, [maxValue]);
    
    return (
        <>
        <Typography className={classes.filterHead}>Price Range</Typography>
        <Container className={classes.inputContainer}>
            <TextField className={classes.inputField} id='from' label="From" variant="standard" value={value[0]} onChange={handleChangeInput} />
            <TextField className={classes.inputField} id='to' label="To" variant="standard" value={value[1]} onChange={handleChangeInput} />
        </Container>
        <Slider
        value={value}
        onChange={handleChangeSlider}
        max={maxValue}
        valueLabelDisplay="auto"
        style={{ 'color': "#05abda", 'marginTop': '20px' }}
        />
        <Button className={classes.button} variant="text" onClick={() => setValue([0, 0])}>
            <Clear />
            Clear
        </Button>
        </>
    );
}
 
export default Price;