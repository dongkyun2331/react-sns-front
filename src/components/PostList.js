import React, { useEffect, useState } from "react";
import { db } from "../firebase";

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
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <img src={post.photoURL} alt={post.author} />
          <p> {post.author}</p>
          <p> {post.content}</p>
          <p> {post.timestamp}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
