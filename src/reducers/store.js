import { createStore, applyMiddleware } from "redux";
import { ADD_SEARCH, ADD_RESULTS, ITEMS_ERROR } from '../actions/actionTypes';
import ReduxThunk from 'redux-thunk';

const initialState = {
    searches: [],
    searchResults: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_SEARCH:
        return {
          ...state,
          searches: [...state.searches, action.item]
        };
      case ADD_RESULTS:
        return {
          ...state,
          searchResults: [...action.searchResults]
        };
      case ITEMS_ERROR:
        return {
          ...state,
          error: action.error
        };
      default:
        return state;
    }
}

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;