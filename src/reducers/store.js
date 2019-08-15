import { createStore, applyMiddleware } from "redux";
import { ADD_SEARCH, ADD_RESULTS } from '../actions/actionTypes';
import ReduxThunk from 'redux-thunk';

const initialState = {
    searches: [],
    searchResults: []
}

const reducer = (state = initialState, action) => {
    console.log('reducer working', action);
    
    switch (action.type) {
        case ADD_SEARCH:
            return ({
                ...state,
                searches: [
                    ...state.searches,
                    action.item
                ]
            });
        case ADD_RESULTS:
            return ({
                ...state,
                searchResults: [
                    // ...state.searchResults,
                    ...action.searchResults
                ]
            });
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;