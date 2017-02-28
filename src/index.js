'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { browserHistory } from 'react-router';

ReactDOM.render(
    routes(browserHistory), document.getElementById('root')
);
