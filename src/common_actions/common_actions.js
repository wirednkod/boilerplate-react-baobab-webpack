'use strict';

import request from 'superagent';
// let request = require('superagent');
const config = __dirname + 'config.js';
// let config = require(ROOT_DIR + '/config.js');

export default class Common_actions {

    static callMe( params) {
        return new Promise(function (resolve, reject) {
            request
                .get('http://' +
                    config.srv_host + ':' +
                    config.srv_host + '/' +
                    config.srv_prefix + '/caller/' + params.name)
                .end(function () {
                    return resolve();
                });
        });
    }

}
