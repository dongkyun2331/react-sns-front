import React, { useState } from "react";
import "firebase/compat/database";
import { db } from "../firebase";

const WritePost = () => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = Date.now();
    db.ref("posts").push({
      content,
      author,
      timestamp,
    });
    setContent("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="content">Content:</label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WritePost;
