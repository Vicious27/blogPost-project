import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("null");
  const [password, setPassword] = useState("null");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password)
  };

  return (
    <form className="login" name="login" onSubmit={handleLogin}>
      <p>
        <label htmlFor="email">Email:</label>
        <input type="email" onChange={(event) => setEmail(event.target.value)} />
      </p>
      <p>
        <label htmlFor="password">Password:</label>
        <input type="password" onChange={(event) => setPassword(event.target.value)} />
      </p>
      <p>
        <button type="submit" disabled={!email && !password}>
          Login
      </button>
      </p>
    </form>
  );
};

export default Login;