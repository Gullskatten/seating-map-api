require('babel-core/register')({
  presets: ['es2015', 'es2017']
});

module.exports = require('./server');
