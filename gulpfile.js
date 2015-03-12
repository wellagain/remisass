var   gulp          = require('gulp'),
      sass          = require('gulp-sass'),                                     // without ruby sass
      // sass       = require('gulp-ruby-sass'),                                   // with ruby sass
      autoprefixer  = require('gulp-autoprefixer'),
      minifycss     = require('gulp-minify-css'),
      livereload    = require('gulp-livereload');

gulp.task('styles', function () {
  return gulp.src('scss/**/*.scss')
      .pipe(sass({includePaths: ['scss']}))                            // without ruby sass
      // .pipe(sass({'sourcemap=none': true}))                               // with ruby sass
      // .on('error', function (err) { console.log(err.message); })          // with ruby sass
      .pipe(autoprefixer('last 3 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('.'))
      .pipe(minifycss())
      .pipe(gulp.dest('.'))
      ;
});

gulp.task('html', function() {
  return gulp.src([
    'grid.html'
  ])
  .pipe(livereload());
});


gulp.task('default', function () {
      gulp.start('styles', 'html');
});

// Watch
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['default']);
  livereload.listen();
  gulp.watch(['scss/**']).on('change', livereload.changed);
});
