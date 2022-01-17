
/**
 * log a message on starting gulp
 */
function startMessage(next) {
    console.clear();
    console.log('\n\n---------------------------\nGulp started...\n');
    next();
}

module.exports = startMessage;
