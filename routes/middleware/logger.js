/**
 *  Logs the requested route as well as the current date and time
 *  Can be changed to show the IP that is requesting the route or something else
 */

function logger(req, res, next) {
    const now = new Date();
    const route = req.baseUrl === '' ? '/home' : req.baseUrl;
    console.log(`------------------------------------\n${route} ${now}\n------------------------------------`);

    next();
}

module.exports = logger;
