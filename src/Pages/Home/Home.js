import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Movies from "../../components/Movies/Movies";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);

  const SearchMovie = (e) => {
    console.log(e.target.value);
  };
  useEffect(() => {
    loadMovieData();
  }, []);

  const loadMovieData = async () => {
    const jsonData = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=a77cde5d&s=Batman`
    );
    const data = await jsonData.json();
    setMovies(data.Search);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="movies-container">
          {movies.map((movie) => (
            <Movies movie={movie}></Movies>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
