exports.clearFolders = require('./tasks/clearFolders');
exports.compileScss = require('./tasks/compileScss');
exports.compileTypescript = require('./tasks/compileTypescript');
exports.finishMessage = require('./tasks/finishMessage');
exports.reload = require('./tasks/reload');
exports.serve = require('./tasks/serve');
exports.startServer = require('./tasks/startServer');
exports.startMessage = require('./tasks/startMessage');


/**
 * For npm start
 */
exports.default = require('./tasks/default');


/**
 * For npm run build
 */
//exports.build = require('./tasks/build');
