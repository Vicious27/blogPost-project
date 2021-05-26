import React from "react";
import { Link } from "react-router-dom";


const Posts = ({ posts, deletePost }) => (
  <article className="posts-container">
    <h1>Posts</h1>
    <ul>
      {posts.lenght < 1 && <li key="empty">
        No posts yet!</li>}
      {posts.map(post => (
        <li key={post.id}>
          <h2>
            <Link to={`/post/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <p>
            <Link to={`/edit/${post.slug}`
            } id="crud-buttons"
            >Edit</Link>
            {" | "}
            <button className="linkLike" id="crud-buttons"
              onClick={() => deletePost(post)}>
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  </article>
);

export default Posts;