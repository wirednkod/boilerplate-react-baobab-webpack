'use strict';

import React, {Component} from 'react';
import PropTypes from 'baobab-react/prop-types';
import CSSMod from 'react-css-modules';

import styles from './style.css';

class Counter extends Component {
    constructor(){
        super();
    }

    render() {
        let self = this;

        let count = (self.props.listArr) ? self.props.listArr.length || 0 : 0;

        return (
            <h4 styleName={self.props.styleSet}>
                Awesome counter: {count}
            </h4>
        );
    }
}

Counter.contextTypes = {
    tree: PropTypes.baobab
};

export default CSSMod(Counter, styles);