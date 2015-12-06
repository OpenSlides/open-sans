var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function () {
    return gulp.src('open-sans.scss')
        .pipe(sass())
        .pipe(gulp.dest('.'));
});


gulp.task('default', ['sass'], function () {});
