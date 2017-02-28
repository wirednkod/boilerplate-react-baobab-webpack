import React, {Component} from 'react';
import {root} from 'baobab-react/higher-order';
import tree from '../state';

import List from '../components/list.js';
import Counter from '../components/counter.js';

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
export default root(App, tree);
