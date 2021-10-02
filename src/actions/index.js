import * as types from '../constants';
import * as api from '../api';

//  Fetching products of specific category from the api
export const getProducts = (categoryId) => async (dispatch) => {
    try {
        dispatch({ type: types.START_LOADING });            //  Making the state of the application 'Loading' to show CircularProgress until data is fetched
        const { data } = await api.fetchProducts(categoryId);
        dispatch({ type: types.END_LOADING });              //  Ending the 'Loading' state

        dispatch({ type: types.FETCH_ALL_PRODUCTS, payload: data });
    } catch (error) {
        console.log(error);
    }
}

//  Fetching all categories from the api
export const getCategories = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCategories();

        dispatch({ type: types.FETCH_ALL_CATEGORIES, payload: data });
    } catch (error) {
        console.log(error);
    }
}