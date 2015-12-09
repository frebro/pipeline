var gulp = require('gulp');
var extend = require('node.extend');
var exists = require('file-exists');
var bs = require('browser-sync').create('bs');
var config = require('../config/bs');
var local = (exists('./gulpfile.js/config/bs.local.js')) ? require('../config/bs.local') : {};

gulp.task('bs', function() {
  return bs.init(
    extend(config, local)
  );
});
