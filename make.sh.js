
var sh = require('shelljs');
var path = require('path');

var templateFile = 'template.htm';

sh.mkdir('html');

sh.find('.')
    .filter(function (file) { return file.match(/\.md$/); })
    .forEach(function (file) {

        console.info("compiling " + file);

        sh.sed('{{markdown_content}}', sh.cat(file), templateFile).to('html\\' + file + '.html');
    });
