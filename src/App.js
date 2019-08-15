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

  // handleSearchInputChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleSearchSubmit = e => {
  //   e.preventDefault();
  //   //replaces spaces between search words with HackerNews'
  //   //required %20 in order for search to work ex)cold%20flu
  //   const searchQuery = this.state.searchInput.trim().replace(/ /g, "%20");
  //   this.searchHackerNews(searchQuery);
  //   this.setState({ searchInput: ""});
  // };

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
