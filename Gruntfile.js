module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js'],
          dest: 'lib/',
          ext: '.js',
        }],
      },
    },

    watch: {
      scripts: {
        files: 'src/**/*.js',
        tasks: ['build'],
        options: {
          interrupt: true,
          atBegin: true,
        },
      },
    },
  });

  grunt.registerTask('build', ['babel']);
};
