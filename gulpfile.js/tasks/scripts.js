var gulp = require('gulp');
var changed = require('gulp-changed');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var bs = require('browser-sync').get('bs');
var config = require('../config/scripts');

gulp.task('scripts', function () {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(notify(function (file) {
      if (file.jshint.success) {
        return false;
      }
      var errors = file.jshint.results.map(function (data) {
        if (data.error) {
          return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
      }).join("\n");
      return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest))
    .pipe(bs.stream());
});
