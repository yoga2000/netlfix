import React from "react";
import Row from "./Row";
import request from "./request";
import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Discover Movie" fetchUrl={request.fetchMovie} />
      <Row title="TV Popular" fetchUrl={request.fetchTvPopular} />
      <Row title="TV Top Rated" fetchUrl={request.fetchTopRated} />
    </div>
  );
}

export default App;
