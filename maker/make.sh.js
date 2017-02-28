
var sh = require('shelljs');
var path = require('path');
var marked = require('marked');

var templateFile = 'template.htm';
var statics = 'github-markdown.css';

sh.mkdir('../html');

sh.cp('-f', statics, '../html');

sh.find('..')
    .filter(function (filename) { return filename.match(/\.md$/); })
    .filter(function (filename) { return !filename.match(/node_modules/); })
    .forEach(function (filename) {

        console.info("compiling " + filename);

        sh.sed('{{markdown_content}}', marked(sh.cat(filename)), templateFile).to('../html/' + path.basename(filename) + '.html');
    });
