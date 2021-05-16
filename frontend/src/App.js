import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './utilities/history';
import Header from './layout/Header';
import Footer from "./layout/Footer";
import VideoList from "./screens/VideoList";

const App = () => {
  return (
      <Router history={history}>
          <Header />
          <Switch>
              <Route path="/" component={VideoList} exact />
          </Switch>
          <Footer />
      </Router>
  );
};

export default App;
