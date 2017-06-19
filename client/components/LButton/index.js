'use strict';

import React, {Component} from 'react';
import CSSMod from 'react-css-modules';

import styles from './style.css';

class LButton extends Component {
    constructor(){
        super();
    }

    render() {
        let self = this;
        let txtButton = self.props.txt || 'Default';

        return (
            <button styleName="default" type="button">{txtButton}</button>
        );
    }
}

export default CSSMod(LButton, styles);