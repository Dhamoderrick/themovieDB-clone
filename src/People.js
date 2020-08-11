import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import "./search.css";
const baseURL = "https://image.tmdb.org/t/p/original/";
function People() {
  const [person, setperson] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `${request.fetchPeople}`;
      const toprated = await axios.get(url);
      setperson(toprated.data.results);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div class="movie_container">
        <div className="another"></div>
        <div className="movie_row">
          {person.map((person) => (
            <div className="mcard">
              <img
                src={`${baseURL}${person.profile_path}`}
                alt={person.poster_path}
              ></img>

              <div className="mcard_content">
                <h4>{person.title || person.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default People;
