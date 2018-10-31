import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Header from './shared/Header';
import HomePage from './home/HomePage';
import ProfilePage from './account/ProfilePage';

function Template() {
  return (
    <Router>
      <div className="wrapper">
        <Header username="anonymous" />
        <section className="page-content">
          <Route exact path="/" component={HomePage} />
          <Route path="/account/profile/:id" component={ProfilePage} />
        </section>
      </div>
    </Router>
  );
}

export default hot(module)(Template);
