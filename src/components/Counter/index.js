'use strict';

import React, {Component} from 'react';
import PropTypes from 'baobab-react/prop-types';
import {branch} from 'baobab-react/higher-order';

import styles from './style.css';

class Counter extends Component {
    constructor(){
        super();
    }

    render() {
        let self = this;
        let count = 0;
        let counterStyle = '';
        switch(self.props.who){
            case 'list':
                count = self.props.lists.length;
                counterStyle = styles.counter1;
                break;
            case 'list2':
                count = self.props.lists2.length;
                counterStyle = styles.counter2;
                break;
            default: count='-';
        }

        return (
            <h4 className={counterStyle}>Awesome counter: {count}</h4>
        );
    }
}

Counter.contextTypes = {
    tree: PropTypes.baobab
};

export default branch(Counter,
    {
        cursors:{
            lists: ['lists'],
            lists2: ['lists2']
        }
    });