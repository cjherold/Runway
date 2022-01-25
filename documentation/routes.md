
# Routes
##### These routes are configured in the app.routes.js file. The middleware is also there and is linked to the pages that use them.

***
### Classes
* A good way to separate large code sections and error checking from the routes.
* Also allows the code to be more extensible and reusable.

***
### Middleware
* Very useful for passing information into the request.
* Cleans up things like meta tags, scripts, stylesheets, long lists, and more into a easy to mainain js object that is stored in its own file.
* The res.locals.something objects will be visible to handlebars as long as the route rendering the handlebars file is connected to that middleware in app.routes.js (look there for examples).