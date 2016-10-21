var css2str = require('../index');
var fs = require('fs');

var str = css2str.parse('./test/source.css');
str = 'var css = ' + str + ';';
fs.writeFileSync('./test/css2js.js', str, 'utf-8');