const del = require('del');
const FRONT_END = './front_end';


/**
 * Clear public folders
 *      -public/js/*
 *      -public/css/*
 */
function clearFolders(next) {
    console.log('Clearing public folder...\n');
    
    del(`${FRONT_END}/public/js/**`, { force: true });
    del(`${FRONT_END}/public/css/**`, { force: true });

    next();
}

module.exports = clearFolders;
