import React, { Component } from "react";
import { connect } from 'react-redux';
import { addSearch, fetchResults } from '../actions/actions';
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

    this.props.addSearch(addSearch(searchValue));

    document.getElementById("searchField").value='';

    this.props.fetchResults(searchValue);
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
        />
        <button onClick={this.handleAddSearch}>Submit</button>
      </form>
      <div>
        {this.props.searchResults.map(articles => {
          return (
            <div key={articles.objectID}>
              <div>Title: {articles.title}</div>
              <div>Author: {articles.author}</div>
            </div>
            // {news.url ? (
            //   <a href={news.url} target="_blank" rel="noopener noreferrer">
            //     View Article: {news.url}
            //   </a>
            // ) : (
            //   <div>Article unavailable</div>
            // )}
          );})
        }
      </div>
      {/* <SearchResults /> */}
    </div>
  );
  }
};

function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    searches: state.searches,
    searchResults: state.searchResults
  }
}

const mapDispatchToProps = {
   addSearch,
   fetchResults
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
