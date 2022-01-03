/**
 *  A super clean way to use states in a dropdown list rendered with {{#each}} in handlebars
 */

function states (req, res, next) {
    const states = {
        MN: 'Minnesota',
        FL: 'Florida'

    };

    res.locals.states = states;
    
    next();

}

module.exports = states;
