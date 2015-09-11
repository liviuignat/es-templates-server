'use strict';

var gulp = require('gulp');
const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});
const jsPaths = ['src/**/*.js', 'tests/**/*.js'];

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

gulp.task('test', function () {
  gulp.src(['./tests/**/*.spec.js'], {
    read: false
  })
    .pipe($.mochaCo({
      reporter: 'nyan'
    }))
    .pipe($.exit());
});

gulp.task('default', ['nodemon', 'lint', 'watch'], function () {
  gulp.watch(jsPaths, ['lint']);
});
