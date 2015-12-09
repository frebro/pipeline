var config = require('../config/styles');
var gulp = require('gulp');
var changed = require('gulp-changed');
var bs = require('browser-sync').get('bs');
var postcss = require('gulp-postcss');
var nano = require('gulp-cssnano');
var autoprefixer = require('autoprefixer');

gulp.task('styles', function () {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(postcss([
      require('autoprefixer')
    ]))
    .pipe(nano())
    .pipe(gulp.dest(config.dest))
    .pipe(bs.stream());
});
