'use strict';

import React, {Component} from 'react';
import {root} from 'baobab-react/higher-order';
import { List2, Counter } from 'components';
import {branch} from 'baobab-react/higher-order';

class Layout2 extends Component {
    render() {
        let self = this;

        return (
            <div>
                <Counter styleSet="counter2" listArr={self.props.lists2} />
                 This is the 2nd App...
                <List2 />
            </div>
        );
    }
}

export default branch(Layout2,
    {
        cursors:{
            lists: ['lists'],
            lists2: ['lists2']
        }
    });
