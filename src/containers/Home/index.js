'use strict';

import React, {Component} from 'react';
import CSSMod from 'react-css-modules';
import { LButton } from 'components';

import styles from './style.scss';

class Home extends Component {
    constructor(props){
        super(props);
    }


    render() {

        console.log(styles);
        return (
			<div>
				<h1>Demo Page</h1>
				<p styleName="test">This is a demo page that will list all components.</p>
                <LButton txt="Text of the button" />
			</div>
        );
    }
}
export default CSSMod(Home, styles);
