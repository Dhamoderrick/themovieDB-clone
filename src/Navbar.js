import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav">
      <div className="nav_elements">
        <div className="logo">
          <Link to="/">
            <h5>TMDB</h5>
            <div className="oval"></div>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>{" "}
          </li>
          <li>
            <Link to="/tvshows">Tv Shows</Link>
          </li>
          <li>
            <Link to="/peoples">Peoples</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
