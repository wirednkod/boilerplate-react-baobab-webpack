'use strict';

const Hapi = require('hapi');
const config = require('./config');
const server = new Hapi.Server();
server.connection({ port: 3001, host: 'localhost' });

server.route({
    method: 'GET',
    path: config.srv_prefix,
    handler: function (request, response) {
        response('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: config.srv_prefix + 'caller/{name}',
    handler: function (request, response) {
        console.log('!!!!!', request.params);
        response();
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at: ' + config.srv_host +':' + config.srv_port);
});
