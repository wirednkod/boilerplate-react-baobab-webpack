import React, {Component} from 'react';
import {root} from 'baobab-react/higher-order';
import state from '../state';

class App extends Component {
    render() {
        return (
            <div>
                 Here you can add whatever div/component etc...
            </div>
        );
    }
}
export default root(App, state);
