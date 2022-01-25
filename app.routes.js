const router = require('express').Router();

/** -------------------------------------------------------------------
 *  Locations
 */
// Middleware
const cdn = require('./routes/middleware/cdn');
const head = require('./routes/middleware/head');
const states = require('./routes/middleware/states');
const logger = require('./routes/middleware/logger');
const variables = require('./routes/middleware/variables');
// Routes
const home = require('./routes/home');
const about = require('./routes/about');
const form = require('./routes/form');

/** -------------------------------------------------------------------
 * Endpoints
 */
// Middleware
router.use('*', head);
router.use('*', cdn);
router.use('*', logger);
router.use('/form', states);
router.use('*', variables); // Always order this one last in case it depends on other middleware
// Routes
router.use('/', home);
router.use('/about', about);
router.use('/form', form);

module.exports = router;
