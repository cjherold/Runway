const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

/**
 *  Minify Js and move it to public js folder
 *      from    /src/js/*
 *      to      /public/js/*
 */
function compileJavascript(next) {
    console.log('Compiling Javacript...\n');

    src('./front_end/src/js/**')
        .pipe(babel())
        .pipe(uglify())
        .pipe(dest('./front_end/public/js'));

    next();
}

module.exports = compileJavascript;
