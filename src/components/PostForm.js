import React, { useState } from "react";
import { redirect } from "react-router-dom";
import Qill from "react-quill";

import 'react-quill/dist/quill.snow.css';

const PostForm = (props) => {
  return (
    <form className="container">
      <h1>Add a New Post</h1>
      {_ Title Fiends Here _}
      {_ Quill Editor Here _}
      <p>
        <button type="submit">Save</button>
      </p>
    </form>
  )
};

export default PostForm;