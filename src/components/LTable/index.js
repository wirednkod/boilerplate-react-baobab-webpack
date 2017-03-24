'use strict';

import React, {Component} from 'react';
import CSSMod from 'react-css-modules';

import styles from './style.less';

class LTable extends Component {
    constructor(props){
        super(props);
        let self = this;
        self.state = {
            // currentSort: { column: constr_column, direction: constr_direction },
            // rowValues : { colVal: null, sortVal: null },
            data: self.props.data,
            // defData: self.props.data,
            // paging: { page: 0, per_page: paging},
        };
    }

    render() {
        let self = this;
        let data = self.state.data || {};
        let tbody = [];
        let thead = [];
        let table = [];
        let tr = [];
        let i=0;
        for(let rows in data) {
            let td = [];
            console.log(Object.keys(data[rows]), Object.keys(data[rows]).length);
            let width = (Object.keys(data[rows]).length >0) ? 100/Object.keys(data[rows]).length : 0;
            for (let col in data[rows]) {
                if (self.props.hasHeader && i == 0) {
                    console.log('it has header');
                    td.push(<div className="headerRow" style={{width: width +'%'}}>{data[rows][col]}</div>);
                } else {
                    console.log(data[rows][col]);
                    td.push(<div className="bodyRow" style={{width:width +'%'}}>{data[rows][col]}</div>);
                }
            }
            tr.push(<div className="row">{td}</div>);
            i++;
        }
        console.log(tr);

        return (
            <div>{tr}</div>
        );
    }
}

export default CSSMod(LTable, styles);