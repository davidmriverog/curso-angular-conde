module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      dist: {
        src: 'src/js/*.js',
        dest: 'dist/js/operations.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
