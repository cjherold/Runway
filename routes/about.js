const router = require('express').Router();
const { Errors } = require('./classes');

// prettier-ignore
router.route('/')
    .get(async (req, res, next) => {
        try {
            // from middleware/variables
            const variables = res.locals.variables.about;

            res.render('about', {
                layout: false,
                ...variables,
            });

        } catch (err) {
            Errors.logError(err, next);
            next();
        }
    });

module.exports = router;
