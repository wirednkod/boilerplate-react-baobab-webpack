'use strict';

import React, {Component} from 'react';
import PropTypes from 'baobab-react/prop-types';
import {branch} from 'baobab-react/higher-order';

class Counter extends Component {
    constructor(){
        super();
    }

    render() {
        let self = this;
        let count = self.props.lists.length;
        console.log(count);
        return (
            <div>{count}</div>
        );
    }
}

Counter.contextTypes = {
    tree: PropTypes.baobab
};

export default branch(Counter,
    {
        cursors:{
            lists: ['lists']
        }
    });