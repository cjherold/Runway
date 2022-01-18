
const router = require('express').Router()
const { Errors } = require('./classes');
const { Misc } = require('./classes');


router.route('/')
    .get(async (req, res, next) => {
        try {
            // from middleware/variables
            const variables = res.locals.variables.form;

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
            const formSubmitted = await Misc.submitTestForm({ formdata: req.body.formdata });
            
            res.json({
                success: true,
                message: 'Form sent successfully',
                data: formSubmitted,
            });
        } catch (err) {
            Errors.saveError(err, next);
            next();
        }
    });

module.exports = router;
