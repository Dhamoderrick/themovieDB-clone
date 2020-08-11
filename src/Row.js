import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

const baseURL = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchurl }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchurl);
      setmovies(request.data.results);
    }
    fetchData();
  }, [fetchurl]);

  return (
    <div class="container">
      <p>{title}</p>
      <div className="row">
        {movies.map((movie) => (
          <div className="card">
            <Link to={`/details/${movie.id}`}>
              <img
                src={`${baseURL}${movie.poster_path}`}
                alt={movie.poster_path}
              ></img>
            </Link>
            <div className="popularity">
              <div className="indicator">{movie.vote_average}</div>
            </div>
            <div className="card_content">
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

export default Row;
