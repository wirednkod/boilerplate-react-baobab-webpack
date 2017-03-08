'use strict';

import React, {Component} from 'react';
import {root} from 'baobab-react/higher-order';
import { List, Counter } from 'components';

class Layout1 extends Component {
    render() {
        return (
            <div>
                <Counter />
                 Here you can add whatever div/component etc...
                <List />
            </div>
        );
    }
}
export default Layout1;
