const { series, parallel } = require('gulp');
const startMessage = require('./startMessage');
const clearFolders = require('./clearFolders');
const compileTypescript = require('./compileTypescript');
const compileScss = require('./compileScss');
const finishMessage = require('./finishMessage');
const processSetup = require('./processSetup');
const startServer = require('./startServer');
const reload = require('./reload');


/**
 * npm start
 * clears public folder
 * compiles scss and typescript
 * starts server
 * reloads and recompiles on change
 */
module.exports = series(
    startMessage,
    clearFolders,
    parallel(
        compileTypescript,
        compileScss,
    ),
    processSetup,
    startServer,
    reload,
    finishMessage,
);

