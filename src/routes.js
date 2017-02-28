import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App/index';

export default function(history) {
    return (
        <Router history={history}>
            <Route path='/' component={App}>
                {/*<Route path='*' component={Error404}/>*/}
            </Route>
        </Router>
    );
}
