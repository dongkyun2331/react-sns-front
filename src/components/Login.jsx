import React from "react";
import "firebase/compat/app";

import { auth } from "../firebase";
import firebase from "firebase/compat/app";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        ></div>
      </div>
    </div>
  );
};

export default Login;
