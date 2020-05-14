import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search/index';
import Product from './pages/Product/index';

const Routes = () => (
    <Switch>
        <Route 
            exact
            path="/"
            component={ Search }
            // component={ Product }
        />
        <Route 
            exact
            path="/product/:id"
            component={ Product }
        />
        <Route component={ () => (<div>Not found</div>) } />
    </Switch>
);

export default Routes;