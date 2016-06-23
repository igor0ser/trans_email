'use strict';

const gulp = require('gulp');
const injectfile = require("gulp-inject-file");
const watch= require('gulp-watch');
const open = require('gulp-open');
const htmlbeautify = require('gulp-html-beautify');

const EMAIL = 'parts/transactional.html';
const EMAIL_INSIDE = 'parts/inside.html';

var optionsHTML = {
	"indent_size": 1,
	"indent_char": "	"
	};

gulp.task('inject', () => 
	gulp.src(EMAIL)
		.pipe(injectfile())
		.pipe(htmlbeautify(optionsHTML))
		.pipe(gulp.dest('')
));

gulp.task('inject2', () => 
	gulp.src(EMAIL_INSIDE)
		.pipe(injectfile())
		.pipe(htmlbeautify(optionsHTML))
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
	watch('parts/*.html', () => gulp.start(['inject', 'inject2']))
);

gulp.task('default', ['open', 'inject2', 'watch']);


