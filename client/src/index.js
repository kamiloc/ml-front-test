import ReactDOM from "react-dom";
import React from "react";

import Layout from "layout";
import AppRouter from "router";
import "assets/styles/globals.scss";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <AppRouter />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
