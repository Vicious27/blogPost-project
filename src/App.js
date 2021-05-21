import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import "./App.css";

const App = (props) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      slug: "Hello React",
      title: "Hello React",
      content: "lorem.",
    },
    {
      id: 2,
      slug: "Hello Project",
      title: "Hello Project",
      content: "tothe.",
    },
    {
      id: 3,
      slug: "Hello Blog",
      title: "Hello Blog",
      content: "Ipsum.",
    }
  ]);

  return (
    <div className="App">
      <Header />
      <Posts posts={posts} />
    </div>
  );
};

export default App;
