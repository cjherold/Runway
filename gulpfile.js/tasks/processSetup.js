const { fork } = require('child_process');
const path = require('path');

let node;


/**
 * Preparing the server before starting it
 */
function processSetup(next) {
    if (node) node.kill();
    node = fork(path.join(__dirname, '../../', 'app.js'), {
        env: Object.assign({}, process.env, {
            TASKRUNNER: 'gulp',
            PORT: 3000,
        }),
        cwd: '.',
        stdio: 'inherit',
    });

    next();
}

// On exit
process.on('exit', () => {``
    if (node) node.kill();
});

module.exports = processSetup;
