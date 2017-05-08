// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {
 
	// Configuration goes here
	grunt.initConfig({
		// get the configuration info from package.json file
		// this way we can use things like name and version (pkg.name)
			
		pkg: grunt.file.readJSON('package.json'),
		watch: {
		  css: {
		    files: [
		      '**/*.sass',
		      '**/*.scss'
		    ],
		    tasks: ['compass']
		  },
		  js: {
		    files: [
		      'assets/js/*.js',
		      'Gruntfile.js'
		    ],
		    tasks: ['jshint']
		  }
		},
		compass: {
		  dist: {
		    options: {
		      sassDir: 'assets/sass',
		      cssDir: 'assets/css',
		      outputStyle: 'compressed'
		    }
		  }
		},
		jshint: {
		  options: {
		    jshintrc: '.jshintrc'
		  },
		  all: ['Gruntfile.js', 'assets/js/*.js']
		},
		browserSync: {
		  files: {
		    src : [
		      'assets/css/*.css',
		      'assets/img/*',
		      'assets/js/*.js',
		      '**/*.html'
		    ],
		  },
		  options: {
		    watchTask: true
		  }
		}
	});

	// Load the Grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-browser-sync');

	// Default task(s)
	grunt.registerTask('default', ['browserSync', 'watch']);

};