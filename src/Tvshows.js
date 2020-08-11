import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import "./search.css";
import { Link } from "react-router-dom";
const baseURL = "https://image.tmdb.org/t/p/original/";
function Tvshows() {
  const [tvshow, settvshow] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `${request.fetchPopularTv}`;
      const toprated = await axios.get(url);
      settvshow(toprated.data.results);
    }
    fetchData();
  }, []);
  console.log(tvshow);
  return (
    <div>
      <div class="movie_container">
        <div className="another"></div>
        <div className="movie_row">
          {tvshow.map((movie) => (
            <div className="mcard">
              <Link to={`/tvdetails/${movie.id}`}>
                <img
                  src={`${baseURL}${movie.poster_path}`}
                  alt={movie.poster_path}
                ></img>
              </Link>
              <div className="mcard_content">
                <Link to={`/tvdetails/${movie.id}`}>
                  <h4>{movie.title || movie.name}</h4>
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

export default Tvshows;
