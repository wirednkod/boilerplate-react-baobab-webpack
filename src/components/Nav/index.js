'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
    constructor(){
        super();
    }

    render() {
        let self = this;

        return (
            <div>
                <Link to="/">Home</Link>&nbsp;
                <Link to="/app">App</Link>&nbsp;
                <Link to="/app2">App2</Link>
            </div>
        );
    }
}

export default Nav;