import React from "react";
import { Link } from "react-router-dom";


const Header = (props) => {

  return (
    <header className="App-header">
      <ul className="container">
        <li key="home">
          <Link to="/">Skate-Sesh</Link>
        </li>
        <li>
          <Link to="/new">Create Post</Link>
        </li>
      </ul>
    </header>
  )
};

export default Header;