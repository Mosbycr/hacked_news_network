import React, { Component } from "react";
import { connect } from "react-redux";

class SearchResults extends Component {
  render() {
    return (
      <div>
        {this.props.searchResults.map(articles => {
          return (
            <div key={articles.objectID}>
              <br />
              <div>Title: {articles.title}</div>
              <div>Author: {articles.author}</div>
              {articles.url ? (
                <a
                  href={articles.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Article: {articles.url}
                </a>
              ) : (
                <div>Article unavailable</div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {
    searches: state.searches,
    searchResults: state.searchResults
  };
}

export default connect(mapStateToProps)(SearchResults);
