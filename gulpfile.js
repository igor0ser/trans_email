'use strict';

const gulp = require('gulp');
const injectfile = require("gulp-inject-file");
const watch= require('gulp-watch');
const open = require('gulp-open');

const EMAIL = 'parts/transactional.html';

gulp.task('inject', () => 
	gulp.src(EMAIL)
		.pipe(injectfile())
		.pipe(gulp.dest('')
));

gulp.task('open', ['inject'], () => {
	var options = {
		app: 'chrome',
		uri: 'transactional.html'
	};
	return gulp.src('').pipe(open(options));
});

gulp.task('watch', () => 
	watch('parts/*.html', () => gulp.start('inject'))
);

gulp.task('default', ['open', 'watch']);


