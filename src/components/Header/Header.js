import React from "react";
import "./Header.css";

const Header = (props) => {
  const { SearchMovie } = props;
  return (
    <div className="header">
      <input onChange={SearchMovie} type="text" placeholder="Search Movie" />
    </div>
  );
};

export default Header;
