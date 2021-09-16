import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-l0wm-4ug.us.auth0.com"
      clientId="K0W6qCJWAM0sjApjjmZbOjoUHj4F9CiH"
      redirectUri={window.location.origin}
      audience="RestaurantAPI"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
