
# Express Routing (app.routes.js)
##### This is where the routes and middleware get set up. Look for examples below.

***

### Example
```js
// Example of using a middleware file with every route
const states = require('./routes/middleware/states');
router.use('*', states);
```