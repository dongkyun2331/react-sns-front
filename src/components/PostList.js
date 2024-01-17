import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./PostList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = db.ref("posts");
    postsRef.on("value", (snapshot) => {
      const posts = [];

      snapshot.forEach((childSnapshot) => {
        const post = {
          id: childSnapshot.key,
          ...childSnapshot.val(),
        };
        posts.push(post);
      });
      setPosts(posts);
    });
  }, []);

  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.id} className="post-item">
          <img
            src={post.photoURL}
            alt={post.author}
            className="post-author-img"
          />
          <div className="post-content">
            <p className="post-author">{post.author}</p>
            <p className="post-text">{post.content}</p>
            <p className="post-timestamp">{post.timestamp}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
