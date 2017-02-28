import React, {Component} from 'react';
import PropTypes from 'baobab-react/prop-types';
import {branch} from 'baobab-react/higher-order';

import styles from './style.css'

class List extends Component {
    constructor(){
        super();
        this.addRow = this.addRow.bind(this);
    }

    addRow() {
        let self = this;
        let lists =  self.props.lists;
        let name = lists[lists.length-1];

        let new_list = name.substr(0, name.length - 1) + (parseInt(name.substr(name.length - 1)) + 1);
        self.context.tree.push('lists',new_list);
    }

    render() {
        let self = this;
        let items = self.props.lists;
        let i=0;
        function renderItem(item) {
            i++;
            return <li key={"key_" + i}>{item}</li>;
        }

        return (
            <div>
                <ul className="${styles.element}">{items.map(renderItem)}</ul>
                <button onClick={self.addRow}>Press me</button>
            </div>
        );
    }
}

List.contextTypes = {
    tree: PropTypes.baobab
};

export default branch(List,
    {
        cursors:{
            lists: ['lists']
        }
    });