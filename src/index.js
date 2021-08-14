import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataProvider } from "./Context/PlaylistContext";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { FetchDataProvider } from "./Context/DataContext";
import { AuthContextProvider } from "./Context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FetchDataProvider>
        <DataProvider>
          <Router>
            <App />
          </Router>
        </DataProvider>
      </FetchDataProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
