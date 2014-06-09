module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
          separator: '\n;\n',
          banner: '/*A SAMPLE GRUNT AND BACKBONE APPLICATION */\n'
      },
      dist: {
        src: ['<%= pkg.gruntjs %>/jquery-min.js','<%= pkg.gruntjs %>/underscore-min.js','<%= pkg.gruntjs %>/backbone-min.js'],
        dest: 'public/build/extplugins.js'
      }
    },

    uglify: {
      options: {
        mangle: {
          except: ['jQuery','$','_', 'Backbone']
        }
      },
      my_target: {
        files: {
          'public/build/extplugins.js': ['public/build/extplugins.js']
        }
      }
    },

    watch: {
      scripts: {
        files: 'public/javascripts/*.js',
        tasks: ['concat', 'uglify']
      }
    }

  });

  // combine files into single file machi kalapu ra check kuti sid chellam mommy
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  //watch and trigger grunt build on content change
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat:dist', 'uglify']);

};