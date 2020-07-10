import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
