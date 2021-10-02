import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { CircularProgress, Grid, Paper } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import { getProducts } from '../../actions';
import Product from './Product/Product';
import useStyles from './styles';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const Products = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const query = useQuery();
    let { products, isLoading } = useSelector(state => state.products);
    const categoryId = query.get('categoryId');
    const price = query.get('price');
    const colors = query.get('colors');
    const rating = query.get('rating');
    
    if(price) products = products.filter(product => product.price >= price.split(',')[0] && product.price <= price.split(',')[1]);
    if(colors) products = products.filter(product => colors.split(',').includes(product.color));
    if(rating) products = products.filter(product => product.rating == rating);

    //  fetching products of the current category
    useEffect(() => {
        if(categoryId) dispatch(getProducts(categoryId));
    }, [categoryId]);

    //  Pagination Logic
    const LIMIT = 6;
    const [page, setPage] = useState(1);
    const [productsOfPage, setProductsOfPage] = useState([]);
    
    useEffect(() => {
        setProductsOfPage(products.slice(0, LIMIT));
        setPage(1);
    }, [categoryId, price, colors, rating]);
    
    useEffect(() => {
        if(!price && !colors && !rating){
            setProductsOfPage(products.slice(0, LIMIT));
            setPage(1);
        }
    }, [products]);

    useEffect(() => {
        setProductsOfPage(products.slice((page-1)*LIMIT, page*LIMIT));
    }, [page]);

    return (
        !isLoading ? (
            <>
            <Pagination
                className={classes.pagination}
                count={Math.ceil(products.length/LIMIT)}
                page={page}
                variant='outlined'
                color='primary'
                renderItem={(item) => (
                    <PaginationItem {...item} onClick={() => setPage(item.page)} />
                )}
            />
            <Grid className={classes.mainContainer} container alignItems='stretch'>
                {productsOfPage.map((product) => (
                    <Grid key={product.id} item className={classes.card} xs={12} sm={12} md={6}>
                        <Product id={product.id} image={product.image} name={product.name} color={product.color} price={product.price} currency={product.currency} releaseDate={product.releaseDate} categoryId={product.categoryId} rating={product.rating} />
                    </Grid>
                ))}
            </Grid>
            </>
        ) : (
            <Paper className={classes.loadingPaper} elevation={6}>
                <CircularProgress style={{'color': '#05abda'}} size='7em' />
            </Paper>
        )
    );
}
 
export default Products;