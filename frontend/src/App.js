import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './utilities/history';
import Header from './layout/Header';
import Footer from "./layout/Footer";
import VideoList from "./screens/MovieList";
import MovieDetails from "./screens/MovieDetails";
import Registration from "./screens/Registration";
import Login from "./screens/Login";

const App = () => {
  return (
      <Router history={history}>
          <Header />
          <Switch>
              <Route path="/" component={VideoList} exact />
              <Route path="/movies/:id/details" component={MovieDetails} />
              <Route path="/users/login" component={Login} />
              <Route path="/users/registration" component={Registration} />
          </Switch>
          <Footer />
      </Router>
  );
};

export default App;
