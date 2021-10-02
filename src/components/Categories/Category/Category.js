import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Card, CardMedia, ButtonBase, Typography } from '@material-ui/core';

import { CHANGE_CATEGORY_ID } from '../../../constants';
import useStyles from './styles';

const Category = ({ id, image, name }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    function useQuery(){
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();
    const categoryId = query.get('categoryId');
    
    //  changing the selected category
    const handleClick = () => {
        dispatch({ type: CHANGE_CATEGORY_ID, payload: id });
        history.push(`/products?categoryId=${id}`);
    }

    return (                            //  check if this category is the selected one to add some styles to it
        <Card className={`${classes.card} ${id==categoryId ?  classes.selectedCard : ""}`} raised elevation={6}>
            <ButtonBase component="span" name="selectCategory" className={classes.cardAction} onClick={handleClick}>
                <CardMedia className={classes.media} image={image}/>
                <Typography className={classes.title} variant='h5' align='center' >{name}</Typography>
            </ButtonBase>
        </Card>
    );
}
 
export default Category;