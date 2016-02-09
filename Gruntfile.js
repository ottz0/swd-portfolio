module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    sass: {
      app: {
        options: {
          style: 'expanded'
        },
        files: {
          'src/assets/css/swd-main.css': 'src/assets/sass/swd-main.scss'
        }
      }
    }, // /Sass

    
    connect: {
      options: {
        port: 8000,
        livereload: 35729,
        hostname: 'localhost',
        base: 'src'
      },
      livereload: {
        options: {
          open: true
        }
      }
    }, // /Connect
    
    
    /*
      Base Tasks
    */
    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: ['src/assets/sass/*.scss', 'src/assets/sass/**/**/*.scss'],
        tasks: ['sass:app'],
      },
      css: {
        files: ['assets/css/*.css'],
        tasks: ['less'],
      },
      html: {
        files: ['src/*.html'],
      },
      js: {
        nonull: true,
        files: ['src/assets/js/swd-main.js'],
        tasks: 'uglify'
        
      }
    }, // /Watch


    /*
      Dist Tasks
    */
    clean: {
      build: {
        src: [ 'dist/*' ]
      },
    },// /Clean

    copy: {
      dist: {
        files: [
          
          {
            nonull: true,
            expand: true, 
            cwd: 'src',
            src: 'includes/**', 
            dest: 'dist',
          },
          {
            nonull: true,
            expand: true, 
            cwd: 'src',
            src: 'sendmail/**', 
            dest: 'dist',
          },     
          {
            nonull: true,
            expand: true, 
            cwd: 'src',
            src: 'index.php', 
            dest: 'dist',
          },
          {
            nonull: true,
            expand: true, 
            cwd: 'src',
            src: 'assets/fonts/**', 
            dest: 'dist',
          },
          {
            nonull: true,
            expand: true, 
            cwd: 'src',
            src: 'assets/img/**', 
            dest: 'dist',
          },


        ],
      }
    }, // /Copy

    
    cssmin: {
      distribution: {
        files: [{
          nonull: true,
          expand: true,
          cwd: 'src',
          src: ['assets/css/*.css', '!*.min.css'],
          dest: 'dist',
          ext: '.min.css'
        }]
      }
    }, // /Uglify
    
    
    uglify: {
      src: {
        files: {
          'src/assets/js/swd-main.min.js': ['src/assets/js/swd-main.js']
        }
      }
    }, // /Uglify


    processhtml: {
        build: {
            nonull: true,
            files: {
                'dist/index.php' : ['dist/index.php'],
                'dist/sendmail/verify.php' : ['dist/sendmail/verify.php'],
            }
        }
    }, // /Processhtml
    

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        nonull: true,
        src: [
              'src/assets/libs/jquery/dist/jquery.min.js', 
              'src/assets/libs/uikit/js/uikit.min.js', 
              'src/assets/js/swd-main.min.js',
              'src/assets/libs/uikit/js/components/sticky.min.js',
              'src/assets/libs/uikit/js/components/tooltip.min.js',
              'src/assets/libs/Chart.js/Chart.min.js',
            ],
        dest: 'dist/assets/js/swd-main.min.js',
      },
    },// /Concat 


  });

  // Base tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  //Dist tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task for development.
  grunt.registerTask('server', ['connect','watch']);

  // Distribution packaging.

  //Clean - Create and clear the dist folder
  //Copy Files to dist - copy
  //Minify css - cssmin
  //Minify js - uglify

  grunt.registerTask('dist', ['clean','cssmin', 'concat', 'copy', 'processhtml']);

  //grunt.registerTask('dist', ['clean','uglify','cssmin','copy','processhtml']);

};