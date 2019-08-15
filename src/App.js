import React, { Component } from "react";
import Header from "../src/components/Header";
import SearchForm from "../src/components/SearchForm";
// import API from "./utils/API";

class App extends Component {
  // state = {
  //   hackerNewsResult: {},
  //   searchInput: ""
  // };

  // searchHackerNews = query => {
  //   API.search(query)
  //     .then(res => this.setState({ hackerNewsResult: res.data }))
  //     .catch(err => console.log(err));
  // };

  //   this.searchHackerNews(searchQuery);


  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm
          // value={this.state.searchInput}
          // searchInput={this.state.searchInput}
          // handleSearchInputChange={this.handleSearchInputChange}
          // handleSearchSubmit={this.handleSearchSubmit}
        />
      </div>
    );
  }
}

export default App;
