import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Grid, Paper } from '@material-ui/core';

import { getCategories } from '../../actions';
import Category from './Category/Category';
import useStyles from './styles';

const Categories = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const categories = useSelector((state) => state.categories);
    
    //  fetching categories
    useEffect(() => {
        dispatch(getCategories());
    }, []);
    
    return (
        categories?.length ? (      //  categories are fetched correctly
            <Grid className={classes.mainContainer} container alignItems='stretch'>
                {categories.map((category) => (
                    <Grid key={category.id} item xs={6} sm={2} className={classes.card}>
                        <Category id={category.id} image={category.image} name={category.name} />
                    </Grid>
                ))}
            </Grid>
        ) : (                   //  categories not fetched yet or no categories
            <Paper className={classes.loadingPaper} elevation={6}>
                <CircularProgress style={{'color': '#05abda'}} size='7em' />
            </Paper>
        )
    );
}
 
export default Categories;