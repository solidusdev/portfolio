import React, { Fragment } from 'react';
import "./styles/scss/main.scss";
import Site from "./site/site";
import { HashRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Site} />
    </Fragment>
  </Router>
);

export default App;
