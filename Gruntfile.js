module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        // Metadata.
        meta: {
            basePath: '../',
            srcPath: '../src/',
            deployPath: '../deploy/',
            jasmine: 'tests/jasmine/',
            root: '/Users/Leo/Documents/root/rcv',
            www: '/Users/Leo/Documents/root/rcv/www'
        },

        // debugging: grunt less:development
        less: {
            // name module
            development: {
                options: {
                    compress: true,

                    // To enable, set sourceMap to true and update sourceMapRootpath based on your install
                    // sourceMap needs grunt-contrib-less > 0.9.0
                    sourceMap: true,
                    sourceMapFilename: 'css/main.css.map', // where file is generated and located

                    sourceMapURL: '/rcv/css/main.css.map'
                },

                files: {
                    // target.css file: source.less file
                    '<%= meta.root  %>/css/devices.css': '<%= meta.root  %>/less/devices.less',
                    '<%= meta.root  %>/css/core.css': '<%= meta.root  %>/less/core.less',
                    '<%= meta.root  %>/css/portfolio.css': '<%= meta.root  %>/less/portfolio.less'
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

        jasmine: {
            pivotal: {
                src: '<%= jasmine =>/src/**/*.js',
                options: {
                    specs: '<%= jasmine =>/spec/*Spec.js',
                    helpers: '<%= jasmine =>/spec/*Helper.js'
                }
            }
        },

        watch: {
            // Watch for LESS changes, building CSS directly
            styles: {
                // Which files to watch (all .less files recursively in the less directory)
                files: ['<%= meta.root  %>/less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            // Watch for JS changes, linting the JS and copying direct to deployment directory.
            scripts: {
                files: ['Gruntfile.js', 'server.js', '<%= meta.www  %>/**/*.js', '<%= meta.www  %>/tests/**/*.js'],
                tasks: ['less::development' ]
            }

        }

    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jasmine');


    // Task definitions
    grunt.registerTask('default', ['watch']);
 //   grunt.registerTask('default', ['jshint']);

};