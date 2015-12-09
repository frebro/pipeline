var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');
var scripts = require('../config/scripts');
var styles = require('../config/styles');

gulp.task('watch', ['build', 'bs'], function() {
  gulp.watch(config.gulp, ['scripts']);
  gulp.watch(scripts.watch, ['scripts']);
  gulp.watch(styles.watch, ['styles']);
});
