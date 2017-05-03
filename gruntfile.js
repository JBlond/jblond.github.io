module.exports = function(grunt){
	"use strict";
	require('time-grunt')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				latedef: true,
				globals: {
					jQuery: true
				},
				devel: true
			},
			uses_defaults: ['js/main.js'],
			with_overrides: {
				options: {
					"browser": true,
					"curly": true,
					"devel": false,
					"eqeqeq": true,
					"eqnull": false,
					"globals": {
						"jQuery": true,
						"module": true,
						"require": true
					},
					"latedef": false,
					"strict": true,
					"undef": true,
					"unused": true

				},
				files: {
					src: ['js/main.js']
				}
			}
		},
		csslint: {
			strict: {
				options: {
					"adjoining-classes": false,
					"box-model": false,
					"import": 2,
					"important": false,
					"ids": false,
					"overqualified-elements": false,
					"universal-selector": false
				},
				src: ['css/override.css']
			}
		},
		cssbeautifier : {
			files : ["css/override.css"],
			options : {
				indent: '	',
				autosemicolon: true
			}
		},
		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'css/main.css': ['css/bootstrap.min.css','css/bootstrap-theme.min.css','css/docs.min.css','css/override.css']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-cssbeautifier');
	grunt.registerTask('default', 'csslint');
	grunt.registerTask('css','cssbeautifier');
	grunt.registerTask('build',['csslint','cssmin']);
};