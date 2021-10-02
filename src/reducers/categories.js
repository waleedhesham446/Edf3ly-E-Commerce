import * as types from '../constants';

//  reducer function to handle the state of the categories
const reducer = (state=[], action) => {
    switch (action.type) {
        case types.FETCH_ALL_CATEGORIES:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;