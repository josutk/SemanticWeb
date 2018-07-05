import React from 'react';
import { Route } from 'react-router-dom';

// Insert here the new pages
import HomePage from './pages/HomePage';
import OffersPage from './pages/OffersPage';

export default (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/offers/:id" component={OffersPage} />
  </div>
);
