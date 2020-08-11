import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Movies from "./Movies";
import Tvshows from "./Tvshows";
import People from "./People";
import { Switch, Route } from "react-router-dom";
import Searchresult from "./Searchresult";
import Footer from "./Footer";
import Details from "./Details";
import Tvdetails from "./Tvdetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movies" component={Movies} />
        <Route path="/tvshows" component={Tvshows} />
        <Route path="/peoples" component={People} />
        <Route path="/searchresult/:query" component={Searchresult} />
        <Route path="/details/:movieid" component={Details} />
        <Route path="/tvdetails/:movieid" component={Tvdetails} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
