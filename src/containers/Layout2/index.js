'use strict';

import React, {Component} from 'react';
import {root} from 'baobab-react/higher-order';
import { List2, Counter } from 'components';

class Layout2 extends Component {
    render() {
        return (
            <div>
                <Counter />
                 This is the 2nd App...
                <List2 />
            </div>
        );
    }
}
export default Layout2;
