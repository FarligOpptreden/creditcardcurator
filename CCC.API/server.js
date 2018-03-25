var babel = require('babel-register')({ presets: ['es2015'] });
var polyFill = require('babel-polyfill');
var debug = require('debug')('CCC.API');
var app = require('./app.js').default;
var config = require('./config.js');

app.set('port', process.env.PORT || config.port || 3000);

var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port);
});