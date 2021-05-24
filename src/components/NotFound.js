import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <article className="not-found container">
    <h1>404!</h1>
    <p>
      Looks like you got lost..
      <Link to="/"> Here's a ride back!</Link>
    </p>
  </article>
);
export default NotFound;