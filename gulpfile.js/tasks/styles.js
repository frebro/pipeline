var config = require('../config/styles');
var gulp = require('gulp');
var changed = require('gulp-changed');
var bs = require('browser-sync').get('bs');
var postcss = require('gulp-postcss');
var nano = require('gulp-cssnano');

gulp.task('styles', function () {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(postcss([
      require('postcss-import'),
      require('postcss-custom-properties'),
      require('postcss-calc'),
      require('postcss-custom-media'),
      require('autoprefixer')
    ]))
    .pipe(nano())
    .pipe(gulp.dest(config.dest))
    .pipe(bs.stream());
});
