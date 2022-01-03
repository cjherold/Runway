
const router = require('express').Router();

/**
 * Middleware
 */
const cdn = require('./routes/_middleware/cdn');
const head = require('./routes/_middleware/head');
const states = require('./routes/_middleware/states');
const logger = require('./routes/_middleware/logger');
const variables = require('./routes/_middleware/variables');

/**
 * Routes
 */
const home = require('./routes/home');
const about = require('./routes/about');
const docs = require('./routes/docs');
const form = require('./routes/form');

/**
 * Middleware Endpoints
 */
router.use('*', head); // * is used for all routes
router.use('*', cdn);
router.use('*', logger);
router.use('/form', states);
router.use('*', variables);

/**
 * Route Endpoints
 */
router.use('/', home);
router.use('/about', about);
router.use('/docs', docs);
router.use('/form', form);

module.exports = router;
