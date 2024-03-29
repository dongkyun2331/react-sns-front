import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import WritePost from "../WritePost/WritePost";
import PostList from "../PostList/PostList";
import "./Chats.css";

const Chats = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();

    navigate("/");
  };

  return (
    <div className="chats-container">
      {user && (
        <div className="user-info">
          <img src={user.photoURL} alt={user.displayName} />
          <p>{user.displayName}</p>
          <button onClick={handleLogout} className="logout-tab">
            Logout
          </button>
        </div>
      )}
      <WritePost />
      <PostList className="post-list" />
    </div>
  );
};

export default Chats;
