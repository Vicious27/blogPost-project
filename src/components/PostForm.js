import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Quill from "react-quill";

import 'react-quill/dist/quill.snow.css';

const PostForm = ({ addNewPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saved, setSaved] = useState(false);

  const handlePostForm = (event) => {
    event.preventDefault();
    if (title) {
      const post = {
        title: title,
        content: content,
      };
      addNewPost(post);
      setSaved(true);
    } else {
      alert("Oops! You forgot a title!");
    };
  };

  if (saved === true) {
    return <Redirect to="/" />;
  }
  return (
    <form className="container"
      onSubmit={handlePostForm}>
      <h1>Log-Sesh</h1>
      <p>
        <label htmlFor="form-title">Title:</label>
        <br />
        <input
          id="form-title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </p>
      <p>
        <label htmlFor="form-content">Content:</label>
        <Quill
          onChange={(content, delta, source, editor) => {
            setContent(editor.getContents());
          }}
        />
      </p>
      <p>
        <button type="submit">Save</button>
      </p>
    </form>
  )
};

export default PostForm;