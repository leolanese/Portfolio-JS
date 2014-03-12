module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        srcPath: './p',
        tests: './tests',
        lessPath: './less',

        less: {
            // name module
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    '/Applications/MAMP/htdocs/p/css/devices.css': '/Applications/MAMP/htdocs/p/less/devices.less',
                    '/Applications/MAMP/htdocs/p/css/core.css': '/Applications/MAMP/htdocs/p/less/core.less',
                    '/Applications/MAMP/htdocs/p/css/portfolio.css': '/Applications/MAMP/htdocs/p/less/portfolio.less'
                }
            }
        },

        // Linting of JS files.
        jshint: {
            options: {
                // Specifying JSHint options and globals
                jshintrc: '.jshintrc'
            },
            files: ['Gruntfile.js', './js/**/*.js']
        },

        watch: {
            // Watch for LESS changes, building CSS directly
            styles: {
                // Which files to watch (all .less files recursively in the less directory)
                files: ['/Applications/MAMP/htdocs/p/less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            // Watch for JS changes, linting the JS and copying direct to deployment directory.
            scripts: {
                files: ['Gruntfile.js', 'server.js', '/Applications/MAMP/htdocs/p/**/*.js', '/Applications/MAMP/htdocs/p/tests/**/*.js'],
                tasks: ['jshint']
            }

        }



    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Task definitions
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('default', ['jshint', 'haml']);

};