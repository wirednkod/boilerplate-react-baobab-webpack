'use strict';

import React, {Component} from 'react';
import {root} from 'baobab-react/higher-order';
import tree from 'managers/StateManager';
import { Nav } from 'components';

class MainLayout extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        );
    }
}
export default root(MainLayout, tree.getStore());
