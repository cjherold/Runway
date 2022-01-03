
const router = require('express').Router()
const { Errors } = require('./classes');


router.route('/')
    .get(async (req, res, next) => {
        try {
            // from middleware/variables
            const variables = res.locals.variables.sampleform;

            res.render('form', {
                layout: 'main',
                ...variables,
            });

        } catch (err) {
            Errors.saveError(err, next);
            next();
        }
    })
    .post(async (req, res, next) => {
        try {
            const formdata = req.body.formdata;
    
            res.json({
                success: true,
                message: 'Submit was successful',
            });
        } catch (err) {
            Errors.saveError(err, next);
            next();
        }
    });

module.exports = router;
