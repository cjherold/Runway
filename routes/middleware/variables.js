/**
 *  These are the variables involved for each page.
 *  Things like the head info, bootstrap cdn, stylesheets and js scripts.
 *  Other middleware might be used here from res.locals.something as part of the request
 *  If res.locals is not working, check the order that this is used in app.routes.js and make it last.
 */

 function variables (req, res, next) {
    const variables = {};

    variables.home = {
        head: res.locals.head.home,
        bootstrap: res.locals.cdn.bootstrap,
        styles: [
            { link: '/css/nav.css' },
            { link: '/css/home.css' }
        ],
        modules: [],
        scripts: [
            { filename: '/js/home.js' }
        ]
    };

    variables.about = {
        head: res.locals.head.about,
        bootstrap: res.locals.cdn.bootstrap,
        styles: [
            { link: '/css/about.css' }
        ],
        modules: [
            { filename: '/js/modules/test-module.js' }
        ],
        scripts: [
            { filename: '/js/about.js'}
        ]
    };

    variables.form = {
        head: res.locals.head.form,
        bootstrap: res.locals.cdn.bootstrap,
        states: res.locals.states,
        styles: [
            { link: '/css/nav.css' },
            { link: '/css/form.css' }
        ],
        modules: [
            { filename: '/js/min/jquery.js' }
        ],
        scripts: [
            { filename: '/js/form.js' }
        ]
    };

    res.locals.variables = variables;

    next();
}

module.exports = variables;
