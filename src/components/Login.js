import React, { useEffect } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import "firebase/compat/app";

import { auth } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    {
      if (user) {
        {
          navigate("/chats");
        }
      }
    }
  }, [user, navigate]);

  return (
    <div id="login-page">
      <div id="login-card">
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign In with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
