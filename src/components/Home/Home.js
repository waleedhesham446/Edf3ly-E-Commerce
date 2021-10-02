import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Grow, Container, Grid } from '@material-ui/core';

import useStyles from './styles';
import Filters from '../Filters/Filters';
import Products from '../Products/Products';

const Home = () => {
    const classes = useStyles();
    const { categoryId } = useSelector(state => state.products);
    
    return (
        <Grow in>
            <Container className={classes.mainContainer} maxWidth='xl'>
                <Grid container className={classes.gridContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={4} md={3}>
                        <Filters />
                    </Grid>
                    <Grid item xs={12} sm={8} md={9} className={classes.productsContainer}>
                        <Switch>
                            <Route path='/' exact component={() => <Redirect to={`/products?categoryId=${categoryId}`} />} />
                            <Route path='/products' exact component={Products} />
                        </Switch>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}
 
export default Home;