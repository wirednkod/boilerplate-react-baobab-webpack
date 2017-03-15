'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { hashHistory } from 'react-router';

ReactDOM.render(
    routes(hashHistory), document.getElementById('root')
);
