const { watch, series } = require('gulp');
const livereload = require('gulp-livereload');


/**
 * Starts the server and watches for changes
 */
function startServer (next) {

    livereload.listen();

    const jsWatcher = watch(['front_end/src/**/**'])
        .on('add', filepath => jsWatcher.add(filepath))
        .on('unlink', filepath => jsWatcher.unwatch(filepath))
        .on('change', series('compileJavascript', 'compileScss', 'reload') );


    next();
}

module.exports = startServer;
