import React from "react";

const SearchResults = props => {
  const { hackerNewsResults } = props;
  const hackerNewsResultList = hackerNewsResults.map(news => {
    return (
      <div key={news.objectID}>
        <br />
        <div>Title: {news.title}</div>
        <div>Author: {news.author}</div>
        {news.url ? (
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            View Article: {news.url}
          </a>
        ) : (
          <div>Article unavailable</div>
        )}
      </div>
    );
  });
  return <div>{hackerNewsResultList}</div>;
};

export default SearchResults;
