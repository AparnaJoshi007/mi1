var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('less', function () {
  return gulp.src('./src/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch',function(){
		gulp.watch('./src/**/*.less',['less']);
})
gulp.task('default',['less','watch']);
