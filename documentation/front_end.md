
# Front End
##### The front end is

***

### Example

# In progress....


***

### Front End

##### Views
* The html is rendered using the mustache template and handlebars.
* Layouts can be used to fill all the html that is around the <body> tag.
* By passing "laout: false" in the route, you can render a page without the "main" layout.

***

##### Src
* All the js, scss, and handlebars files for the website are in the src folder.
* The public folder has the compiled versions of these files.
* When "npm start" is run:
    * The public folder is cleared (except for images)
    * The src/js folder is minified and placed into public/js
    * The src/scss folder is compiled into css and placed into public/css
    * The handlebars files are rendered as html when the route that uses them is called. It does not just compile them all like js and scss.
