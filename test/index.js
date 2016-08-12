var css2str = require('../index');
var fs = require('fs');

var str = css2str.parse('./source.css');
str = 'var css = ' + str + ';';
fs.writeFileSync('./css2js.js', str, 'utf-8');
