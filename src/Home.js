import React from "react";
import Row from "./Row";
import request from "./request";
import Search from "./Search";

function Home() {
  return (
    <div className="Home">
      <Search fetchurl={request.fetchPopular}></Search>
      <Row title="What's Popular" fetchurl={request.fetchPopular}></Row>
      <Row title="Trending Movies" fetchurl={request.fetchTrendingMovies}></Row>
      <Row title="Top Rated " fetchurl={request.fetchTopratedMovies}></Row>
    </div>
  );
}

export default Home;
