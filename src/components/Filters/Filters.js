import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import Rating from './Rating/Rating';

const Filters = () => {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = useState([50, 500]);
    const allColors = Array.from(new Set(useSelector(state => state.products.products).map(product => product.color)));
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedRating, setSelectedRating] = useState(0);
    const  { categoryId } = useSelector(state => state.products);
    
    //  filter products
    const handleFilter = () => {
        let queryStr = '';
        if(value[1]) queryStr += `price=${value[0]},${value[1]}&`;
        if(selectedColors.length) queryStr += `colors=${selectedColors.map(index => allColors[index])}&`;
        if(selectedRating) queryStr += `rating=${selectedRating}`;
        history.push(`/products?categoryId=${categoryId}&${queryStr}`);
    }
    
    return (
        <Grid container className={classes.gridContainer}>
            <Grid className={classes.filterItem} item>
                <Price value={value} setValue={setValue} />
            </Grid>
            <Grid className={classes.filterItem} item>
                <Colors allColors={allColors} selectedColors={selectedColors} setSelectedColors={setSelectedColors} categoryId={categoryId} />
            </Grid>
            <Grid className={classes.filterItem} item>
                <Rating selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
            </Grid>
            <Button fullWidth variant='contained' color='secondary' onClick={handleFilter} disabled={value[1]+selectedColors.length+selectedRating === 0}>Filter</Button>
        </Grid>
    );
}
 
export default Filters;