'use strict';

import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl,  HelpBlock} from 'react-bootstrap';

class FieldGroup extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let self = this;
        let id = self.props.id;
        let help = self.props.help;
        let label = self.props.label;
        let props = self.props;

        return (
            <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>

        );
    }
}
export default FieldGroup;