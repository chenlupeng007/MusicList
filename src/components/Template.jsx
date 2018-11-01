import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Header from './shared/Header';
import HomePage from './home/HomePageContainer';
import LoginPage from './account/LoginPage';
import ProfilePage from './account/ProfilePage';

function Template({ progress }) {
  return (
    <Router>
      <div className="wrapper">
        <Header username="anonymous" />
        <p>{ progress }</p>
        <section className="page-content container-fluid">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/account/login" component={LoginPage} />
          <Route path="/account/profile/:id" component={ProfilePage} />
        </section>
      </div>
    </Router>
  );
}

export default hot(module)(Template);
