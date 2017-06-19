'use strict';

import React, {Component} from 'react';
import {branch} from 'baobab-react/higher-order';
import PropTypes from 'baobab-react/prop-types';
import Common_Actions from 'common_actions/Common_Actions';

import { Link } from 'react-router';

import styles from './style.css';

class List extends Component {
    constructor() {
        super();
        this.addRow = this.addRow.bind(this);
        this.callFunc = this.callFunc.bind(this);
    }

    addRow() {
        let self = this;
        let lists = self.props.lists;
        let name = lists[lists.length - 1];

        let new_list = name.substr(0, name.length - 1) + (parseInt(name.substr(name.length - 1)) + 1);
        self.context.tree.push('lists', new_list);
    }

    callFunc(){
        let self = this;
        let params = { name: 'Mple'};
        let mpla = Common_Actions.callMe(params);
    }

    render() {
        let self = this;
        let items = self.props.lists;
        let i = 0;

        function renderItem(item) {
            i++;
            return <li className={styles.lielement} key={"key_" + i}>{item}</li>;
        }

        return (
            <div>
                <ul className={styles.element}>{items.map(renderItem)}</ul><br />
                Normal button: <button onClick={self.addRow}>Add items</button><br />
                Simple a href (not Link): <a href="/app2">Href me to app2</a><br />
                React Router Link: <Link to="/app2">Link me to app2</Link><br />
                Normal button with function: <button onClick={self.callFunc}>Take me to...</button>
            </div>
        );
    }
}

List.contextTypes = {
    tree: PropTypes.baobab
};

export default branch(List, {
    cursors: {
        lists: ['lists']
    }
});
