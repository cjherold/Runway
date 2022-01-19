
# Express Routing (app.routes.js)
#### This is where the routes and middleware get set up. Look for examples below.


###### This will make states available to every route. It is a handy way to render a large dropdown list in handlebars.
```js
// Example of using a middleware file with every route
const states = require('./routes/middleware/states');
router.use('*', states);
```