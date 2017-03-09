'use strict';

import request from 'superagent';
// let request = require('superagent');
const config = __dirname + 'config.js';
// let config = require(ROOT_DIR + '/config.js');

export default class Common_actions {

    static callMe( params) {
        return new Promise(function (resolve, reject) {
            console.log('called - common actions');
            request
                .get('http://localhost:3001/srv/caller/' + params.name)
                .end(function () {
                    return resolve();
                });
        });
    }

}
