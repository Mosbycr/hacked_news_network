import React, { Component } from "react";
import { connect } from 'react-redux';
import { ADD_SEARCH } from '../actions/actionTypes';
// import SearchResults from "../components/SearchResults";

class SearchForm extends Component {

  constructor(props){
    super(props);
    this.addSearch = React.createRef();
  }

  handleAddSearch = (e) => {
    e.preventDefault();
    
    //replaces spaces between search words with HackerNews'
   //required %20 in order for search to work ex)cold%20flu
    const searchValue = this.addSearch.current.value
      .trim()
      .replace(/ /g, "%20");

    this.props.dispatch({
      type: ADD_SEARCH,
      item: searchValue
    });

    document.getElementById("searchField").value='';
  }

  render(){
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for news here"
          name="searchInput"
          id="searchField"
          ref={this.addSearch}
          // value={props.value}
          // onChange={props.handleSearchInputChange}
        />
        <button onClick={this.handleAddSearch}>Submit</button>
      </form>
      {/* <SearchResults /> */}
    </div>
  );
  }
};

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    searches: state.searches
  }
}

// function mapDispatchToProps(dispatch) {
//   return{
//     onSearchSubmit: () => {
//       console.log('clicked');
//       const action = { type: 'SEARCHINPUT'};
//       dispatch(action);
//     }
//   }
// }

export default connect(mapStateToProps)(SearchForm);
