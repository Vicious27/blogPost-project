import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";


const Header = (props) => {
  const { user, onLogout } = useContext(UserContext);

  return (
    <header className="App-header">
      <ul className="container">
        <li>
          <Link to="/">Memoirs</Link>
        </li>
        {user.isAuthenticated ? (
          <li>
            <Link to="/new">New Post</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;