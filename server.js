'use strict';

const Hapi = require('hapi');
const config = require('./config');

const Inert = require('inert');
const Vision = require('vision');
const reactViews = require('hapi-react-views');

const server = new Hapi.Server();

server.connection({
    port: config.srv_port ,
    host: config.srv_host
});

server.register([{
    register: Inert
}, {
    register: Vision
}], function(err) {

    if (err) return console.error(err);

    // Serving the react components -- START
    server.views({
        engines: {
            jsx: reactViews
        },
        relativeTo: __dirname,
        path: 'public'
    });

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                index: ['index.html']
            }
        }
    });

    // Serving the react components -- END


    // SERVER SIDE Routing

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
        console.log('Server running at: ' + config.srv_host + ':' + config.srv_port);
    });

});