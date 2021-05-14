import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './utilities/history';
import Header from './layout/Header';
import ProductList from "./screens/ProductList";

const App = () => {
  return (
      <Router history={history}>
          <Header />
          <Switch>
              <Route path="/" component={ProductList} exact />
          </Switch>
      </Router>
  );
};

export default App;
