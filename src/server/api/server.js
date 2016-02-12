'use strict';

var restify = require('restify');

var server = restify.createServer();

var stubGET = function (req, res, next) {
  res.send('You tried to read a stub');
};

var stubPOST = function (req, res, next) {
  res.send('You tried to create a stub');
};

var stubPATCH = function (req, res, next) {
  res.send('You tried to update a stub');
};

var stubPUT = function (req, res, next) {
  res.send('You tried to replace a stub');
};

var stubDELETE = function (req, res, next) {
  res.send('You tried to delete a stub');
};

server.get('/:resource', stubGET);
server.post('/:resource', stubPOST);
server.patch('/:resource', stubPATCH);
server.put('/:resource', stubPUT);
server.delete('/:resource', stubDELETE);

server.listen(8080, function () {
  console.log('%s is operational at %s', server.name, server.url);
  console.log('Server is listening on port 8080.');
});
