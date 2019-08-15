import { createStore } from "redux";
import { ADD_SEARCH } from '../actions/actionTypes';

const initialState = {
    searches: []
}

const reducer = (state = initialState, action) => {
    console.log('reducer working', action);
    
    switch (action.type) {
        case ADD_SEARCH:
            return ({
                searches: [
                    ...state.searches,
                    action.item
                ]
            });
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;