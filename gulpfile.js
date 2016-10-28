var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    csslint = require('gulp-csslint'),
    cleanCSS = require('gulp-clean-css'),
    gutil = require('gulp-util'),
    less = require('gulp-less');

function cssLintReporter(file) {
    gutil.log(gutil.colors.cyan(file.csslint.errorCount)+' errors in '+gutil.colors.magenta(file.path));

    file.csslint.results.forEach(function(result) {
        gutil.log(result.error.message+' on line '+result.error.line);
    });
}

gulp.task('build-css', function () {
    gulp.src('./css/main.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(csslint({
            'adjoining-classes': false,
            'fallback-colors': false,
            'font-sizes': false,
            'important': false,
            'unqualified-attributes': false
        }))
        .pipe(csslint.reporter(cssLintReporter))
        .pipe(cleanCSS({
            'compatibility': '*'
        }))
        .pipe(gulp.dest('./css/'));
});