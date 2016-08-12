var fs = require('fs');

function parse(cssFileUri) {
	var cssContent;
	if ( /\.css$/.test(cssFileUri)){
		cssContent = fs.readFileSync(cssFileUri, {
			encoding: 'utf8'
		});
	} else {
		cssContent = cssFileUri;
	}
	cssContent = cssContent.replace(/[\n|\r]/g, " ")
                            .replace(/'/g, '\"')
                            .replace(/\s/g, '');
	cssContent = "'" + cssContent + "'";
	return cssContent;
}

module.exports = {
	parse: parse
};