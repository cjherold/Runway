const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
 

/**
 * Compiles Typescript into Javascript
 *      from    /src/ts/*
 *      to      /public/js/*
 */
function compileTypescript(next) {
    console.log('Compiling Typescript...\n');

    src('./front_end/src/ts/**')
        .pipe(ts({
            noImplicitAny: true,
            esModuleInterop: true,
            removeComments: true,
            target: 'ES6'
        }))
        .pipe(dest('./front_end/public/js'))
    
    
    next();
}

module.exports = compileTypescript;
