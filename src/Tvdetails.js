import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import YouTube from "react-youtube";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Tvdetails(props) {
  const [movieid] = useState(props.match.params.movieid);
  const [aboutmovie, setaboutmovie] = useState([]);
  const [geners, setgeners] = useState([]);
  const [actor, setactor] = useState([]);
  const [key, setkey] = useState([]);
  const [trailer, settrailer] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const appendvalue = `${request.fetchTvDetails}${movieid}${request.api}`;
      const credit = `${request.fetchTvDetails}${movieid}${request.credits}`;
      const keywords = `${request.fetchTvDetails}${movieid}${request.keywords}`;
      const trailer = `${request.fetchTvDetails}${movieid}${request.fetchMovieTrailer}`;
      const resp = await axios.get(appendvalue);
      const actors = await axios.get(credit);
      const movie_key = await axios.get(keywords);
      const movie_trailer = await axios.get(trailer);
      setaboutmovie([resp.data]);
      setgeners(resp.data.genres);
      setactor(actors.data.cast);
      setkey(movie_key.data.results);
      settrailer(movie_trailer.data.results);
    }
    fetchData();
  }, []);
  console.log(key);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="Details">
      {aboutmovie.map((details) => (
        <div>
          <div className="poster">
            <div className="detail_banner">
              <img src={`${baseURL}${details.poster_path}`}></img>
            </div>
            <div className="film_detail">
              <div className="name_trailer">
                <h3>{details.title || details.name}</h3>
              </div>
              <div className="geners">
                {geners.map((geners) => (
                  <h4>{geners.name}</h4>
                ))}
              </div>
              <div className="rating">Rating : {details.vote_average}/10</div>
              <span>{details.tagline}</span>
              <h5>Overview</h5>
              <p>{details.overview}</p>
            </div>
          </div>
          <div className="movie_details">
            <div className="cast">
              {actor.map((act) => (
                <div className="ch_card">
                  <img
                    src={`${baseURL}${act.profile_path}`}
                    alt={act.poster_path}
                  ></img>

                  <div className="mcard_content">
                    <h4>{act.name}</h4>
                    <span>{act.character}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="other_details">
              {aboutmovie.map((details) => (
                <div className="od">
                  <h3>Original Title</h3>
                  <div>{details.original_title}</div>
                  <h3>Status</h3>
                  <div>{details.status}</div>
                  <h3>Release Date</h3>
                  <div>{details.release_date}</div>
                  <h3>Keywords</h3>
                  <div className="out_key">
                    {key.map((k) => (
                      <div className="keyword">{k.name}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="trailer">
        {trailer.map((trailer) => (
          <YouTube videoId={trailer.key} opts={opts} />
        ))}
      </div>
    </div>
  );
}

export default Tvdetails;
