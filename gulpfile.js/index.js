exports.clearFolders = require('./tasks/clearFolders');
exports.compileScss = require('./tasks/compileScss');
exports.compileJavascript = require('./tasks/compileJavascript');
exports.finishMessage = require('./tasks/finishMessage');
exports.reload = require('./tasks/reload');
exports.processSetup = require('./tasks/processSetup');
exports.startServer = require('./tasks/startServer');
exports.startMessage = require('./tasks/startMessage');


/**
 * For npm start
 */
exports.default = require('./tasks/default');


/**
 * For npm run build
 */
// exports.build = require('./tasks/build');
