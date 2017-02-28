'use strict';

import React, {Component} from 'react';
import {root} from 'baobab-react/higher-order';
import tree from '../../managers/StateManager';

import List from '../../components/List';
import Counter from '../../components/Counter';

class App extends Component {
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
export default root(App, tree.getStore());
