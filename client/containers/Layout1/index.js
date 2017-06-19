'use strict';

import React, {Component} from 'react';
import {root} from 'baobab-react/higher-order';
import {branch} from 'baobab-react/higher-order';
import CSSModules from 'react-css-modules';

import { List, Counter } from 'components';

import styles from './style.css';

class Layout1 extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let self = this;
        return (
            <div styleName="layout">
                <Counter styleSet="counter1" listArr={self.props.lists} />
                 Here you can add whatever div/component etc...
                <List />
            </div>
        );
    }
}

export default branch(
    CSSModules(Layout1, styles),
    {
        cursors:{
            lists: ['lists'],
            lists2: ['lists2']
        }
    });
