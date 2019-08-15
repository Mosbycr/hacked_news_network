import React, { Component } from "react";
import { connect } from "react-redux";

class SearchResults extends Component {
  render() {
    return (
      <div>
        {this.props.error && <p>Error fetching.</p>}
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
  return {
    searches: state.searches,
    searchResults: state.searchResults,
    error: state.error
  };
}

export default connect(mapStateToProps)(SearchResults);
