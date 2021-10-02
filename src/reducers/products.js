import * as types from '../constants';

//  reducer function to handle the state of the products
const reducer = (state={ products: [], categoryId: 1, isLoading: true }, action) => {
    switch (action.type) {
        case types.START_LOADING:       //  fetching products started 
            return {
                ...state,
                isLoading: true
            };
        case types.END_LOADING:         //  fetching products ended
            return {
                ...state,
                isLoading: false
            };
        case types.FETCH_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,   //  all products of the current selected category
            };
        case types.CHANGE_CATEGORY_ID:      //  selected category changed
            return {
                ...state,
                categoryId: action.payload, //  the id of the new selected category
            };
        default:
            return state;
    }
}

export default reducer;