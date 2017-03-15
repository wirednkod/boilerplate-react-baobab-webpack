'use strict';

import request from 'superagent';
const config = __dirname + 'config.js';

export default class Common_actions {

    static callMe( params) {
        return new Promise(function (resolve, reject) {
            console.log('called - common actions');
            request
                .get('http://'+ config.srv_host +':'+ config.srv_port +'/srv/caller/' + params.name)
                .end(function () {
                    console.log('Helloooo.... it\'s me...');
                    return resolve('Helloooo.... it\'s me...');
                });
        });
    }

}
