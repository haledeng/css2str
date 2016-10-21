var fs = require('fs');
var CleanCss = require('clean-css');
var stripCssComments = require('strip-css-comments');

function parse(cssFileUri) {
    var cssContent;
    if (/\.css$/.test(cssFileUri)) {
        cssContent = fs.readFileSync(cssFileUri, {
            encoding: 'utf8'
        });
    } else {
        cssContent = cssFileUri;
    }
    cssContent = stripCssComments(cssContent, {
        preserve: false
    });
    cssContent = new CleanCss().minify(cssContent).styles;
    cssContent = cssContent.replace(/'/g, '\"');
    cssContent = "'" + cssContent + "'";
    return cssContent;
}


module.exports = {
    parse: parse
};