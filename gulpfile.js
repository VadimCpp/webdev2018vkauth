var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//
// Configure the browserSync task
//
// NOTE! 
// The website needs port 80 only
// This is VKontakte restriction for localhost
//
// Stop the Apache server to free port 80
//
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
    port: 80
  })
});


gulp.task('watch', function() {
  gulp.watch("./index.html", browserSync.reload);
});


// Run everything
gulp.task('default', ['browserSync', 'watch']);
