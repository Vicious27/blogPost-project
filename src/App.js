import React, { useState } from "react";
import { useStorageState } from 'react-storage-hooks';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import NotFound from "./components/NotFound";
import Message from "./components/Message";
import Login from "./components/Login";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "./App.css";


const App = (props) => {
  const [posts, setPosts] = useStorageState(localStorage, `state-posts`, []);
  const [message, setMessage] = useState(null);

  const setFlashMessage = (message) => {
    setMessage(message)
    setTimeout(() => {
      setMessage(null);
    }, 1600);
  };

  const getNewSlugFromTitle = (title) =>
    encodeURIComponent(title.toLowerCase().split(" ").join("-"));

  //for login In, using fireBase.
  const onLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => console.log("logged in!"))
      .catch(error => console.error(error));
  };

  // CRUD functions
  const addNewPost = (post) => {
    post.id = posts.length + 1;
    post.slug = getNewSlugFromTitle(post.title);
    setPosts([...posts, post]);
    setFlashMessage(`saved`);
  };

  const updatePost = (post) => {
    post.slug = getNewSlugFromTitle(post.title);
    const index = posts.findIndex((p) => p.id === post.id);
    const oldPosts = posts.slice(0, index).concat(posts.slice(index + 1));
    const updatedPosts = [...oldPosts, post].sort((a, b) => a.id - b.id);
    setPosts(updatedPosts);
    setFlashMessage(`updated`);
  }

  const deletePost = (post) => {
    if (window.confirm("Delete this post?")) {
      const updatedPosts = posts.filter((p) => p.id !== post.id);
      setPosts(updatedPosts);
      setFlashMessage(`deleted`);
    }
  };


  return (
    <Router>
      <div className="App">
        <Header />
        {message && <Message type={message} />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Posts posts={posts}
              deletePost={deletePost} />}
          />
          <Route
            path="/post/:postSlug"
            render={(props) => {
              const post = posts.find((post) =>
                post.slug === props.match.params.postSlug);
              if (post) {
                return <Post post={post} />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route
            exact
            path="/login"
            render={() => <Login onLogin={onLogin} />}
          />
          <Route
            exact
            path="/new"
            render={() => (
              <PostForm
                addNewPost={addNewPost}
                post={{ id: 0, slug: "", title: "", content: "" }} />
            )}
          />
          <Route
            path="/edit/:postSlug"
            render={(props) => {
              const post = posts.find((post) =>
                post.slug === props.match.params.postSlug);
              if (post) {
                return <PostForm updatePost={updatePost} post={post} />
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
