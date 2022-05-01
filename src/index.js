import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { Global, css } from "@emotion/react";
import "@csstools/normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            font-size: 62.5%;
            height: 100%;
          }

          body {
            height: 100%;
            font-size: 1.7rem;
            line-height: 1.5;
            margin: 0;
            font-family: Roboto, Roboto Condensed, Rokkitt, -apple-system,
              BlinkMacSystemFont, "Segoe UI", sans-serif;
            -webkit-font-smoothing: antialiased;
          }

          #root {
            height: 100%;
          }
        `}
      />
      <App />
    </Provider>
  </React.StrictMode>
);
