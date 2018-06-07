import React from 'react';
import { Route } from 'react-router-dom';

// Insert here the new pages
import HomePage from './pages/HomePage';

export default (
  <div>
    <Route exact path="/" component={HomePage} />
  </div>
);
