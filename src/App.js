import React, { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import "./App.css";

const App = (props) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello React",
      content: "lorem.",
    },
    {
      id: 2,
      title: "Hellow Project",
      content: "tothe.",
    },
    {
      id: 3,
      title: "Hello Blog",
      content: "Ipsum.",
    }
  ]);

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
