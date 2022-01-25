const { fork } = require('child_process');
const path = require('path');

let alreadyRunning;


/**
 *  Prepare the process
 */
function processSetup(next) {
    if (alreadyRunning) alreadyRunning.kill();
    alreadyRunning = fork('app.js');

    next();
}

// On exit
process.on('exit', () => {
    if (alreadyRunning) alreadyRunning.kill();
});

module.exports = processSetup;
