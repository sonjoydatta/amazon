import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header';
import HeaderMobile from './HeaderMobile';
import { Homepage } from '../pages';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <HeaderMobile />
    <Switch>
      <Route path="/" component={Homepage} exact />
    </Switch>
  </BrowserRouter>
);
 
export default Routes;