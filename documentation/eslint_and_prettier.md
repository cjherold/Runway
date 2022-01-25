
# Eslint & Prettier
##### This is how you get Eslint and Prettier to highlight and auto-format your code. If you want to disable this, you can just remove the eslintrc and prettierrc files from the repo. I highly recommend using these as they help keep code clean and consistent.

***
### Installation
* Download extensions: Eslint by Microsoft and Prettier.
* Add/configure a .eslintrc.yml and .prettierrc.yml file.

###### Install
```bash
npm install -D eslint prettier

npx install-peerdeps --dev eslint-config-airbnb

npm install -D eslint-config-prettier eslint-plugin-prettier
```

###### If you have any trouble, view this link https://github.com/airbnb/javascript/issues/2202

***


### Examples
##### There are already .yml versions included in this project but here are some JSON alternatives.

###### Ignore annoying things you don't want prettier to autoformat.
```js
router.route('/').get(async (req, res, next) => {
    try {
        res.render('home', {
            layout: 'main',
        });
    } catch (err) {
        next(err);
    }
});

// Using an ignore

// prettier-ignore
router.route('/')
    .get(async (req, res, next) => {
        try {
            res.render('home', {
                layout: 'main',
            });
        } catch (err) {
            next(err);
        }
    });
```

###### If you prefer JSON here is a basic .eslintrc.json example.
```json
{
    "extends": ["airbnb", "prettier"],
    "plugins": ["prettier"],
    "rules": {
        "prettier/prettier": ["error"]
    }
}
```
###### If you prefer JSON here is a basic .prettierrc.json example.
```json
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "es5",
    "parser": "babel",
    "editor.formatOnSave": true,
    "prettier.useTabs": true
}
```

###### Exmple contents of .eslintignore or .prettierignore file
```sh
node_modules
package.json
package-lock.json
.env
```