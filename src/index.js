import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { authSettings } from "./common/AuthSettings"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={authSettings.domain}
      clientId={authSettings.clientId}
      redirectUri={window.location.origin}
      audience={authSettings.audience}
      // useRefreshTokens={true}
      redirectUri={window.location.origin}
      // scope="project:admin"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
