import React from 'react';
import { Route } from 'react-router-dom';

// Insert here the new pages
import HomePage from './pages/HomePage';
import OffersPage from './pages/OffersPage';
import SingleOfferPage from './pages/SingleOfferPage';

export default (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/search/:location" component={OffersPage} />
    <Route exact path="/offer/:id" component={SingleOfferPage} />
  </div>
);
