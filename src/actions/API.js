import axios from 'axios';
const baseURL = "http://hn.algolia.com/api/v1/search?query=";
const parameters = "&tags=story&hitsPerPage=20";

export default {
    search: function(query) {
        return axios.get(baseURL + query + parameters);
    }
};