'use strict';

import React, {Component} from 'react';
import { LButton } from 'components';

class Home extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
			<div>
				<h1>Demo Page</h1>
				<p>This is a demo page that will list all components.</p>
                <LButton txt="Text of the button" />
			</div>
        );
    }
}
export default Home;
