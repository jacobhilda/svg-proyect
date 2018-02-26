var gulp = require('gulp'),
		contact = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		stylus = require('gulp-stylus'),
		nib = require('nib'),
		plumber = require('gulp-plumber'),
		watch = require('gulp-watch');

// var sourcemaps = require('gulp-sourcemaps');

gulp.task('stylus', function(){
	gulp.src('stylus/*.styl')
	.pipe(plumber())
	.pipe(stylus({
		use: nib(),
		compress: true
	}))
	.pipe(gulp.dest(''));
});


gulp.task('default', ['watch']);

gulp.task('watch', function(){
	gulp.watch('stylus/*.styl', ['stylus']);

});