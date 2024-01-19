import React, { useState } from "react";
import "firebase/compat/database";
import { db, auth } from "../firebase";
import "./WritePost.css";

const WritePost = () => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timestamp = `${year}-${month}-${date} ${hours}:${minutes}`;
    const user = auth.currentUser;

    db.ref("posts").push({
      content,
      author: user.displayName,
      photoURL: user.photoURL,
      timestamp,
    });
    setContent("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <input
        type="text"
        id="input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        autocomplete="off"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default WritePost;
