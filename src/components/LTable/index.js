'use strict';

import React, {Component} from 'react';
import CSSMod from 'react-css-modules';

import styles from './style.less';

class LTable extends Component {
    constructor(props){
        super(props);
        let self = this;
        self.state = {
            data: props.data,
            hasHeader: props.hasHeader,
            textHeader: (props.hasHeader) ? 'Hide' : 'Show'
        };

        self.headerAlter = self.headerAlter.bind(self);
    }

    headerAlter(){
        let self = this;

        self.setState({
            hasHeader: !self.state.hasHeader,
            textHeader: (!self.state.hasHeader) ? 'Hide' : 'Show'
        });
    }

    render() {
        let self = this;
        let data = self.state.data || {};
        let tbody = [];
        let thead = [];
        let table = [];
        let width;
        let tr = [];
        let hasHeader = self.state.hasHeader || false;
        let i=0;

        for(let rows in data) { width = (Object.keys(data[rows]).length >0) ? 100/Object.keys(data[rows]).length : 0; }

        for(let rows in data) {
            let td = [];
            let styleName = 'bodyRow';

            if (hasHeader && i==0) {
                styleName='headerRow';
            }else if (!hasHeader && i==0){
                i++;
                continue;
            }
            for (let col in data[rows]) {
                td.push(<div key={data[rows][col] + "_"+ i } styleName={styleName} style={{width:width +'%'}}>{data[rows][col]}</div>);
            }
            tr.push(<div key={"row_"+ data[rows] + "_"+ i } styleName="row">{td}</div>);
            i++;
        }

        return (
            <div>
                <button onClick={self.headerAlter}>{self.state.textHeader} header</button>
                <div>{tr}</div>
            </div>
        );
    }
}

export default CSSMod(LTable, styles);