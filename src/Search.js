import React, { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [search, setsearch] = useState([]);

  const handlesubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="search">
      <div className="search_banner">
        <p>
          Welcome.<br></br>Millions of movies, Tv shows and people to
          discover.Explore now.
        </p>
        <form onSubmit={handlesubmit}>
          <div className="field">
            <input
              type="text"
              placeholder="Search for movies,Tv showes and person......"
              onChange={(e) => setsearch(e.target.value)}
            ></input>

            <button type="submit">
              <Link to={`/searchresult/${search}`}>Search</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
