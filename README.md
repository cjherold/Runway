# Runway
##### A quick way to get a website up to speed and off the ground.

# Notice: Project is still being finished so this readme is not quite ready...

## About
##### Some of the main features of this project can be seen by the example pages already here. These pages try to utilize things like routes, middleware, classes, modules, scss, and the env file.

***
## Documentation
* [Front End](./documentation/frontend.md)
* [Routes](./documentation/routes.md)
* [Express Routing](./documentation/expressrouting.md)
* [Express](./documentation/express.md)
* [Gulp](./documentation/gulp.md)
* [Env](./documentation/env.md)
* [Eslint](./documentation/eslint.md)

***


## Setup
##### Here is how you get up and running. [More](./documentation/setup.md)



## Gulp
##### This project uses gulp as a task manager



```bash

# make sure that .env is in the .gitignore file (this one is an example for reference only)
# remove .git and run
git init

# install node_modules
npm i

# basic start
npm start

# development start
npm run dev
```

# Files to add
* .gitignore has a few things that are going to be left out, but are highly recommended
* .env with a PORT
* _notes folder is recommended as a handy place to store temp files and notes.
* Here is a sample of how ./ will look

## Example file structure
```txt
_notes/
front_end/
gulpfile.js/
logs/
node_modules/
routes/
.env
.gitignore
app.js
app.routes.js
package-lock.json
package.json
README.md
```




## Routes
#### Overview
##### These routes are configured in the app.routes.js file. The middleware is also there and is linked to the pages that use them.
#### Classes
* A good way to separate large code sections and error checking from the routes.
* Also allows the code to be more extensible and reusable.
#### Middleware
* Very useful for passing information into the request.
* Cleans up things like meta tags, scripts, stylesheets, long lists, and more into a easy to mainain js object that is stored in its own file.
* The res.locals.something objects will be visible to handlebars as long as the route rendering the handlebars file is connected to that middleware in app.routes.js (look there for examples).


## Front End

#### Views
* The html is rendered using the mustache template and handlebars.
* Layouts can be used to fill all the html that is around the <body> tag.
* By passing "laout: false" in the route, you can render a page without the "main" layout.


#### Src
* All the js, scss, and handlebars files for the website are in the src folder.
* The public folder has the compiled versions of these files.
* When "npm start" is run:
    * The public folder is cleared (except for images)
    * The src/js folder is minified and placed into public/js
    * The src/scss folder is compiled into css and placed into public/css
    * The handlebars files are rendered as html when the route that uses them is called. It does not just compile them all like js and scss.

## Gulp
* Gulp is used to start and run everything in this project.
* It has a folder of all the tasks and runs them in its defualt task.
* Tasks:
    * clearFolders: clears the public folders (except for images).
    * compileJavascript: minifies all the js and places it in the public/js folder.
    * compileScss: compiles the scss into css and places it in the public/css folder
    * finishMessage: a message that runs at the end of all the gulp tasks.
    * processSetup: helps prepare things so that the process quits on exit an helps when one is alredy runing
    * reload: refreshes livereload
    * startMessage: a message that runs at the start of the tasks
    * startServer: watches for changes and reloads on change

## Logs
* Stores all the output of the program.
* Currently output.txt is replaced with each new run.

## Examples
