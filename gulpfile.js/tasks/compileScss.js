const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const FRONT_END = './front_end';


/**
 * Convert SCSS to CSS then autoprefix them
 *       from    /src/scss/*
 *       to      /public/css/*
 */
function sassConvert(next) {
    console.log('Compiling Sass...\n');

    src(`${FRONT_END}/src/scss/**.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(dest(`${FRONT_END}/public/css/`));

    src(`${FRONT_END}/src/scss/partials/*.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(dest(`${FRONT_END}/public/css`));

    next();
}

module.exports = sassConvert;
