const livereload = require('gulp-livereload');


/**
 * Reloads server after changes
 */
function reload (next) {
    livereload.reload();
    next();
}

module.exports = reload;
