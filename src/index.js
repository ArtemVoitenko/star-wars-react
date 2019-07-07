import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-context";
ReactDOM.render(
  <ErrorBoundry>
    <SwapiServiceProvider>
      <Router>
        <App />
      </Router>
    </SwapiServiceProvider>
  </ErrorBoundry>,
  document.getElementById("root")
);
