'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { MainLayout, Layout1, Layout2, Error404, Home } from 'containers';

export default function(history) {
    return (
        <Router history={history}>
            <Route path="/" component={MainLayout} >
                <IndexRoute component={Home} />
                <Route path="app" component={Layout1} />
                <Route path="app2" component={Layout2} />
                <Route path='*' component={Error404} />
            </Route>
        </Router>
    );
}
