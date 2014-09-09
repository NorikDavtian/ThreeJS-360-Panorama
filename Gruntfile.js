module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    
    watch: {
      livereload: {
        options: { livereload: true },
        files: ['index.html','js/main.js'],
      },
      js:{
        files: ['js/main.js'],
        tasks: ['uglify:demo']
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: false,
        beautify: true
      },
      demo: {
        src: ['js/main.js'],
        dest: 'js/main.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify:demo','watch']);
};