#!/usr/bin/env node
var css2str = require('../index.js'),
	fs = require('fs'),
	path = require('path');


function getJSON() {
	var jsonPath = path.dirname(__dirname) + '/package.json';
	if (fs.existsSync(jsonPath)) {
		var content = fs.readFileSync(jsonPath);
		content = JSON.parse(content);
		return content;
	}
	return {};
}

function index() {
	var slice = Array.prototype.slice,
		input = process.argv[2] || '',
		args = slice.call(process.argv, 3),
		output = args.splice(args.length - 1, 1)[0];


	output = output || input + '.js';
	var packageJson = getJSON();
	
	input = input.toLowerCase();
	if (input.indexOf('.css') > -1) {
		var content = css2str.parse(input);
		content = 'var cssContent = ' + content + ';';
		fs.writeFileSync(output, content, {encoding: 'utf-8'});
	} else if (input.indexOf('-v') > -1) {
		console.log(packageJson.version);
	}
}

index();