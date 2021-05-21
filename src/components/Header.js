import React from "react";
import { Link } from "react-router-dom";


const Header = (props) => {

  return (
    <header className="App-header">
      <ul className="container">
        <li key="home">
          <Link to="/">Site Title</Link>
        </li>
      </ul>
    </header>
  )
};

export default Header;