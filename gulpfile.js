'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var jsPaths = ['src/**/*.js'];

gulp.task('lint', function () {
  return gulp.src(jsPaths)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

gulp.task('watch', [], function () {
  gulp.watch(jsPaths, ['lint']);
});

gulp.task('nodemon', function (cb) {
  var started = false;

  return $.nodemon().on('start', function () {
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task('default', ['nodemon', 'lint', 'watch'], function () {
  gulp.watch(jsPaths, ['lint']);
});
