
/**
 * Custom message when gulp tasks are finished
 */
 function finishMessage(next) {
    console.log('Gulp finished...\n');
    console.log('---------------------------\n');
    next();
}

module.exports = finishMessage;
