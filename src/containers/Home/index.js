'use strict';

import React, {Component} from 'react';
import CSSMod from 'react-css-modules';
import { LButton } from 'components';
import { ButtonGroup, ButtonToolbar, Button, DropdownButton, MenuItem, Breadcrumb, Tabs, Tab, Radio, Table} from 'react-bootstrap';
import { FormControl, FormGroup, Checkbox, ControlLabel } from 'react-bootstrap';

import styles from './style.less';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(styles);

        let self = this;
        return (
            <div className="container">
                <h1>Demo Page</h1>
                <p className="test_div">This is a demo page that will list all components.</p>
                <div className="contain">
                    <LButton txt="Text of the button" />
                </div>
                <div className="contain">
                    <ButtonToolbar>
                        <Button>Default</Button>
                        <Button bsStyle="primary">Primary</Button>
                        <Button bsStyle="success">Success</Button>
                        <Button bsStyle="info">Info</Button>
                        <Button bsStyle="warning">Warning</Button>
                        <Button bsStyle="danger">Danger</Button>
                        <Button bsStyle="link">Link</Button>
                    </ButtonToolbar>
                </div>
                <div className="contain">
                    <ButtonToolbar>
                        <Button bsStyle="primary" bsSize="large">Large button</Button>
                        <Button bsSize="large">Large button</Button>
                    </ButtonToolbar>
                    <ButtonToolbar>
                        <Button bsStyle="primary">Default button</Button>
                        <Button>Default button</Button>
                    </ButtonToolbar>
                    <ButtonToolbar>
                        <Button bsStyle="primary" bsSize="small">Small button</Button>
                        <Button bsSize="small">Small button</Button>
                    </ButtonToolbar>
                    <ButtonToolbar>
                        <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
                        <Button bsSize="xsmall">Extra small button</Button>
                    </ButtonToolbar>
                </div>
                <div className="contain">
                    <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
                    <Button bsSize="large" block>Block level button</Button>
                </div>
                <div className="contain">
                    <ButtonGroup>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </div>
                <div className="contain">
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button>1</Button>
                            <Button>2</Button>
                            <Button>3</Button>
                            <Button>4</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button>5</Button>
                            <Button>6</Button>
                            <Button>7</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button>8</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
                <div className="contain">
                    <DropdownButton bsStyle="default" title="Dropdown" id="dropdown-button">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Separated link</MenuItem>
                    </DropdownButton>
                </div>
                <div className="contain">
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                            Library
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Data
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="contain">
                    <Tabs defaultActiveKey={1} animation={true} id="tab-example">
                        <Tab eventKey={1} title="Tab 1">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </Tab>
                        <Tab eventKey={2} title="Tab 2">Lorem Ipsum 2 Lorem Ipsum 2 Lorem Ipsum 2 Lorem Ipsum 2 Lorem Ipsum 2 </Tab>
                        <Tab eventKey={3} title="Tab 3" disabled>Lorem Ipsum 3 Lorem Ipsum 3 Lorem Ipsum 3 Lorem Ipsum 3 Lorem Ipsum 3 </Tab>
                    </Tabs>
                </div>
                <div className="contain">
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="contain">
                    <form>
                        <Checkbox checked readOnly>
                            Checkbox
                        </Checkbox>
                        <Radio checked readOnly>
                            Radio
                        </Radio>

                        <FormGroup>
                            <Checkbox inline>
                                1
                            </Checkbox>
                            {' '}
                            <Checkbox inline>
                                2
                            </Checkbox>
                            {' '}
                            <Checkbox inline>
                                3
                            </Checkbox>
                        </FormGroup>
                        <FormGroup>
                            <Radio inline>
                                1
                            </Radio>
                            {' '}
                            <Radio inline>
                                2
                            </Radio>
                            {' '}
                            <Radio inline>
                                3
                            </Radio>
                        </FormGroup>

                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Select</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">select</option>
                                <option value="other">...</option>
                            </FormControl>
                        </FormGroup>
                        <FormGroup controlId="formControlsSelectMultiple">
                            <ControlLabel>Multiple select</ControlLabel>
                            <FormControl componentClass="select" multiple>
                                <option value="select">select (multiple)</option>
                                <option value="other">...</option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Textarea</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="textarea" />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Static text</ControlLabel>
                            <FormControl.Static>
                                email@example.com
                            </FormControl.Static>
                        </FormGroup>

                        <Button type="submit">
                            Submit
                        </Button>
                    </form>
                </div>
                <div className="contain"></div>
                <div className="contain"></div>
                <div className="contain"></div>
                <div className="contain"></div>
            </div>
        );
    }
}
export default CSSMod(Home, styles);