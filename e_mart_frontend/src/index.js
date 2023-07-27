import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import "./index.css";
import { StateContext } from "./context/StateContext";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  
    <Router>
      <StateContext>
      <GoogleOAuthProvider clientId="1019589682321-oaad64ues5m8t9vvuo68kdcqlopj4m4a.apps.googleusercontent.com">
        <Toaster/>
        <App />
      </GoogleOAuthProvider>
      </StateContext>
    </Router>
 
);
