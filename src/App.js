import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import NotFound from "./components/NotFound";
import Message from "./components/Message";
import "./App.css";

const App = (props) => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(null);

  const setFlashMessage = (message) => {
    setMessage(message)
    setTimeout(() => {
      setMessage(null);
    }, 1600);
  };

  const getNewSlugFromTitle = (title) => {
    encodeURIComponent(title.toLowerCase().split(" ").join("-"));
  }

  const addNewPost = (post) => {
    post.id = posts.length + 1;
    post.slug = this.getNewSlugFromTitle(post.title);
    setPosts([...posts, post]);
    setFlashMessage(`saved`);
  };

  //updatePost(function)
  //refering to post as p to prevent overriding the original post value that was passed as a parameter.
  //adding the old post and the updated post into a new array
  //sorting by id so that edited post remains in it's original place
  //sets the post in state equal to the new updated lists of post and a new flash message

  const updatePost = (post) => {
    post.slug = getNewSlugFromTitle(post.title);
    const index = posts.findIndex((p) => p.id === post.id);
    const oldPosts = posts.slice(0, index).concat(posts.slice(index + 1));
    const updatedPosts = [...oldPosts, post].sort((a, b) => a.id - b.id);

    setPosts(updatedPosts);
    setFlashMessage(`updated`);

  }

  return (
    <Router>
      <div className="App">
        <Header />
        {message && <Message type={message} />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Posts posts={posts} />}
          />
          <Route
            path="/post/:postSlug"
            render={(props) => {
              const post = posts.find((post) =>
                post.slug === props.match.params.postSlug);
              if (post) return <Post post={post} />;
              else return <NotFound />;
            }} />
          <Route
            exact
            path="/new"
            render={() => (<PostForm addNewPost={addNewPost} />)}
          />
          <Route
            path="/edit/:postSlug"
            render={(props) => {
              const post = posts.find((post) =>
                post.slug === props.match.params.postSlug);
              if (post) {
                return <PostForm post={post} />
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
