import React from "react";
import Header from "../src/components/Header";
import SearchForm from "../src/components/SearchForm";
// import API from "./utils/API";

function App() {

  // searchHackerNews = query => {
  //   API.search(query)
  //     .then(res => this.setState({ hackerNewsResult: res.data }))
  //     .catch(err => console.log(err));
  // };

  //   this.searchHackerNews(searchQuery);


  
    return (
      <div className="App">
        <Header />
        <SearchForm />
      </div>
    );
}

export default App;
