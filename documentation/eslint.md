
# Eslint
##### This is how you get Eslint to highlight your code. If you want to disable this, you can just remove the eslintrc file. I highly recommend using these as they help keep code clean and consistent.

***
### Installation
* Download extensions: Eslint by Microsoft
* Add/configure a .eslintrc.yml file

###### Install Commands
```bash
npx install-peerdeps --dev eslint-config-airbnb

npm install -D eslint-config-prettier eslint-plugin-prettier
```

###### If you have any trouble, view this link https://github.com/airbnb/javascript/issues/2202

***


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

###### Exmple contents of .eslintignore file
```sh
node_modules
package.json
package-lock.json
.env
```