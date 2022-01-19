
# Gulp
#### This is the taskrunner for the project. Each task is a function that does something to get the project up and running. Below the tasks are broken down further.

## Tasks
* clearFolders.js
* compileJavascript.js
* compileScss.js
* default.js
* finishMessage.js
* processSetup.js
* reload.js
* startMessage.js
* startServer.js

## Explanations
##### clearFolders.js
###### This clears all the css and some js files in the front_end/public folder. It leaves public/js/min as a place that you can drag large minified files into so that they don't have to be recompiled each time the project reloads. It also leaves the img folder. Everything else gets cleared and filled from the compiled files in front_end/src folder.


##### compileJavascript.js
###### Compiles all of the javascript and puts it into public. Modules are meant to be imports and should be above any script tags that rely on them in the view. Partials are just small segments of code that stand on their own. Partials aren't meant to be imported or used in other js files. That is more of a modules thing.

##### compileScss.js
##### Sass is..