const { watch, series } = require('gulp');
const livereload = require('gulp-livereload');

/**
 * Starts the server and watches for changes
 */
function startServer(next) {
    livereload.listen();

    const jsWatcher = watch([
        './front_end/src/js/**',
        './front_end/src/scss/**',
        './front_end/src/views/**',
        './routes/**',
        './routes/**/**',
    ])
        .on('add', (filepath) => jsWatcher.add(filepath))
        .on('unlink', (filepath) => jsWatcher.unwatch(filepath))
        .on('change', series('compileJavascript', 'compileScss', 'reload'));

    next();
}

module.exports = startServer;
