require("babel-core/register");
var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var jasmine = require('gulp-jasmine');
var cucumber = require('gulp-cucumber');

gulp.task('less', function () {
  return gulp.src('./src/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('test', function() {
  return gulp.src('./src/**/*.spec.js')
  .pipe(jasmine({
            includeStackTrace: true
        }));
});

gulp.task('cucumber', function() {
    return gulp.src('*features/*')
    .pipe(cucumber({
        'steps': '*features/steps/*.js',
        'support': '*features/support/*.js'
    }));
});

gulp.task('watch',function(){
		gulp.watch('./src/**/*.less',['less']);
})
gulp.task('default',['less','watch','test','cucumber']);
