
// import React from "react";
// import ReactDOM from "react-dom/client"; // Import from 'react-dom/client' instead of 'react-dom'
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";


// // Create a root element using createRoot
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Render your App inside the root element
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );





import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-srithsapy15xobfu.us.auth0.com"
      clientId="fOcqUkYAhLpBomGvw5FRhaXaR2F3fvnm"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
