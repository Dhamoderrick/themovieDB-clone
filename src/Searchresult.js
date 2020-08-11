import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import "./search.css";
import { Link } from "react-router-dom";
const baseURL = "https://image.tmdb.org/t/p/original/";
const dummy = "https://ipsumimage.appspot.com/640x360";

function Searchresult(props) {
  const [query, setquery] = useState(props.match.params.query);
  const [searchresult, setsearchresults] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const appendvalue = `${request.fetchSearch}${query}`;
      const resp = await axios.get(appendvalue);
      setsearchresults(resp.data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="movie_row">
        {searchresult.map((movie) => (
          <div className="mcard">
            <Link to={`/details/${movie.id}`}>
              <img
                src={`${baseURL}${movie.poster_path}` || `  ${dummy} `}
                alt={movie.poster_path}
              ></img>
            </Link>
            <div className="mcard_content">
              <Link to={`/details/${movie.id}`}>
                <h4>{movie.title || movie.original_name}</h4>
              </Link>

              <span>{movie.release_date || movie.first_air_date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Searchresult;
