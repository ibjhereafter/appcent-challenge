import './App.css';
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './utilities/history';
import Header from './layout/Header';
import Footer from "./layout/Footer";
import VideoList from "./screens/MovieList";
import MovieDetails from "./screens/MovieDetails";
import AboutUs from "./screens/AboutUs";
import Registration from "./screens/Registration";
import AddComment from "./screens/AddComment";
import Login from "./screens/Login";
import LogOut from "./components/LogOut";


const App = () => {
  return (
      <main>
          <Router history={history}>
              <Header />
              <Switch>
                  <Route path="/" component={VideoList} exact />
                  <Route path="/movies/:id/details" component={MovieDetails} />
                  <Route path="/aboutus" component={AboutUs} exact />
                  <Route path="/users/registration" component={Registration} />
                  <Route path="/comments/:id/create" component={AddComment} />
                  <Route path="/users/login" component={Login} />
                  <Route path="/users/logout" component={LogOut} />
              </Switch>
              <Footer />
          </Router>
      </main>

  );
};

export default App;
