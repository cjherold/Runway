const router = require('express').Router()
const { Errors } = require('./classes');

router.route('/')
    .get(async (req, res, next) => {
        try {
            // from middleware/variables
            const variables = res.locals.variables.home;

            res.render('colors', {
                layout: 'main',
                ...variables,
            });

        } catch (err) {
            Errors.saveError(err, next);
            next();
        }
    })

module.exports = router;
