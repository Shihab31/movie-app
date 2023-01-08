import React, { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";

const Home = () => {
  const API_KEY = "a77cde5d";
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const SearchMovie = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apiKey=${API_KEY}&s=?${search}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, [search]);

  return (
    <div>
      <div className="header">
        <h2 style={{ marginTop: "20px", color: "white" }}>
          Search Your Movie Name:
        </h2>
        <input onChange={SearchMovie} type="text" placeholder="Search Movie" />
      </div>
      <div className="container">
        <div className="movies-container">
          {movies?.map((movie) => (
            <Movies movie={movie}></Movies>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
