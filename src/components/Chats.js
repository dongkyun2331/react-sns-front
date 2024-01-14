import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import WritePost from "./WritePost";

const Chats = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();

    navigate("/");
  };

  return (
    <div>
      {user && (
        <div>
          <img src={user.photoURL} alt={user.displayName} />
          <p>{user.displayName}</p>
          <button onClick={handleLogout} className="logout-tab">
            Logout
          </button>
          <WritePost />
        </div>
      )}
    </div>
  );
};

export default Chats;
