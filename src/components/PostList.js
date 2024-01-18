import React, { useEffect, useState, useRef } from "react";
import { db } from "../firebase";
import "./PostList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const messagesEndRef = useRef(null);

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

  useEffect(() => {
    scrollToBottom();
  }, [posts]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
      <div ref={messagesEndRef}></div>
    </ul>
  );
};

export default PostList;
