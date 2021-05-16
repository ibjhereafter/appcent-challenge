import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './utilities/history';
import Header from './layout/Header';
import Footer from "./layout/Footer";
import VideoList from "./screens/MovieList";
import MovieDetails from "./screens/MovieDetails";

const App = () => {
  return (
      <Router history={history}>
          <Header />
          <Switch>
              <Route path="/" component={VideoList} exact />
              <Route path="/movies/:id/details" component={MovieDetails} />
          </Switch>
          <Footer />
      </Router>
  );
};

export default App;
