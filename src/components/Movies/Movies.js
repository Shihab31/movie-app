import React from "react";
import "./Movies.css";

const Movies = (props) => {
  console.log(props);
  const { Poster, Title, Year } = props.movie;
  return (
    <div className="movie-info">
      <img src={Poster} alt="" />
      <h3>{Title}</h3>
      <div className="movies-type">
        <p>Release:</p>
        <p>{Year}</p>
      </div>
    </div>
  );
};

export default Movies;
