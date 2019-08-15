import { ADD_SEARCH } from '../actions/actionTypes';
import axios from "axios";
const baseURL = "http://hn.algolia.com/api/v1/search?query=";
const parameters = "&tags=story&hitsPerPage=20";


export const addSearch = (item) => ({
    type: ADD_SEARCH,
    item
});

export const fetchResults = (query) => {
    return (dispatch) => {
        axios.get(baseURL + query + parameters)
        .then(function (response) {
            const results = response.data.hits;
            console.log(results);
        })
    }
};