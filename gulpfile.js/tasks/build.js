var gulp = require('gulp');
var sequence = require('gulp-sequence');
var config = require('../config');

gulp.task('build', function(cb) {
  sequence(
    'scripts',
    'styles',
  cb);
});
