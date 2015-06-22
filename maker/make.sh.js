
var sh = require('shelljs');
var path = require('path');
var marked = require('marked');

var templateFile = 'template.htm';
var statics = 'github-markdown.css';

sh.mkdir('../html');

sh.cp('-f', statics, '../html');

sh.find('..')
    .filter(function (file) { return file.match(/\.md$/); })
    .filter(function (file) { return !file.match(/node_modules/); })
    .forEach(function (file) {

        console.info("compiling " + file);

        sh.sed('{{markdown_content}}', marked(sh.cat(file)), templateFile).to('../html/' + path.basename(file) + '.html');
    });
