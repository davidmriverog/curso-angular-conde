module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/app.js', 'src/js/controllers.js'],
        dest: 'dist/js/operations.js',
      },
    },
    uglify:{
      dist: {
        src: 'dist/js/operations.js',
        dest: 'dist/js/operations.min.js'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/styles.min.css': ['src/css/*.css']
        }
      }
    },
    shell:{
      multiple:{
        command:[
          'cd dist/js',
          'rm operations.js'
        ].join('&&')
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['concat','uglify','cssmin','shell']);

};
