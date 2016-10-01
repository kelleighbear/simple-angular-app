'use strict';
var minimist = require('minimist');
var resourcePath = 'client/';
var knownOptions = {
    string: 'env',
    'default': {
        env: process.env.NODE_ENV || 'dev'
    }
};

var mainBowerFiles = {
    paths: {
        bowerDirectory: 'client/bower_components',
        bowerrc: '.bowerrc',
        bowerJson: 'bower.json'
    }
};

var bower = {
        json: require('../bower.json'),
        directory: 'client/bower_components/',
        ignorePath: /\.\.\//
    };

/**
 * wiredep and bower settings
 */
var getWiredepDefaultOptions = function() {
    var options = {
        bowerJson: bower.json,
        directory: bower.directory,
        ignorePath: bower.ignorePath,
        fileTypes: {
            html: {
                block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
                detect: {
                    js: /<script.*src=['"]([^'"]+)/gi,
                    css: /<link.*href=['"]([^'"]+)/gi
                },
                replace: {
                    js: '<script src="{{filePath}}"></script>',
                    css: '<link rel="stylesheet" href="{{filePath}}" />'
                }
            }
        }
    };
    return options;
};

module.exports = {
    paths: {
        appCode: [resourcePath + 'app/**', '!client/app/index.html'],
        vendor: [resourcePath + 'bower_components/**'],
				js: [resourcePath + 'app/**/*.js'],
        html: [resourcePath + 'app/?*/**/*.html'],
        img: [resourcePath + 'img/**/*'],
				jsOrder: [
            '**/app.module.js',
            '**/*.module.js',
						'**/*.route.js',
            '**/*.js'
        ],
        sass: [resourcePath + 'styles/**/*.scss'],
				index: [resourcePath + 'app/index.html'],
				dest: [resourcePath]
    },

    mainBowerFiles: mainBowerFiles,
		getWiredepDefaultOptions: getWiredepDefaultOptions,

    //Build path
    buildPath: 'client/build',

    options: minimist(process.argv.slice(2), knownOptions)
};
