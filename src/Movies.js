import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import "./search.css";
import { Link } from "react-router-dom";
const baseURL = "https://image.tmdb.org/t/p/original/";

function Movies() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `${request.fetchToprated}`;
      const toprated = await axios.get(url);
      setmovies(toprated.data.results);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div class="movie_container">
        <div className="movie_row">
          {movies.map((movie) => (
            <div className="mcard">
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`${baseURL}${movie.poster_path}`}
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
    </div>
  );
}

export default Movies;
