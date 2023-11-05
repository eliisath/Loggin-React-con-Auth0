import React from "react";
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-02opv4i8iag7nhv0.us.auth0.com"
    clientId="BmfC4kjPrRFXWbu0jD0TkuuSUt9DWJp4"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/callback'
    }}
  >
    <App />
  </Auth0Provider>
);
