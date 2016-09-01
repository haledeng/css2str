var parse = require('../index');
var content = parse.parse('./st_dropdown_search.css');
var fs = require('fs');

fs.writeFileSync('./dist.css', content, 'utf-8');