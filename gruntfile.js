module.exports = function(grunt){
	"use strict";
	require('time-grunt')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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
				expand: true,
				src: ['css/bootstrap.min.css','css/bootstrap-theme.min.css','css/docs.min.css','css/override.css']
			}
		}
	});
	grunt.loadNpmTasks('grunt-cssbeautifier');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', 'csslint');
	grunt.registerTask('css','cssbeautifier');
	grunt.registerTask('build',['csslint','cssbeautifier','cssmin']);
};