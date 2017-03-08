'use strict';

import React, {Component} from 'react';
import PropTypes from 'baobab-react/prop-types';
import {branch} from 'baobab-react/higher-order';

import Common_Actions from 'common_actions/Common_Actions';

import styles from './style.css';

class List extends Component {
    constructor() {
        super();
        this.addRow = this.addRow.bind(this);
        this.callFunc = this.callFunc.bind(this);
    }

    addRow() {
        let self = this;
        let lists2 = self.props.lists2;
        let name = lists2[lists2.length - 1];

        let new_list = name.substr(0, name.length - 1) + (parseInt(name.substr(name.length - 1)) + 1);
        self.context.tree.push('lists2', new_list);
    }

    callFunc(){
        let self = this;
        let params = { name: 'Mple'};
        let mpla = Common_Actions.callMe(params);
    }

    render() {
        let self = this;
        let items = self.props.lists2;
        let i = 0;

        function renderItem(item) {
            i++;
            return <li className={styles.lielement} key={"key_" + i}>{item}</li>;
        }

        return (
            <div>
                <ul className={styles.element}>{items.map(renderItem)}</ul><br />
                Normal button: <button onClick={self.addRow}>Press me</button><br />
                Simple a href: <a href="/app2">Take me to</a><br />
                Normal button: <button onClick={self.callFunc}>Take me to...</button>
            </div>
        );
    }
}

List.contextTypes = {
    tree: PropTypes.baobab
};

export default branch(List, {
    cursors: {
        lists2: ['lists2']
    }
});
