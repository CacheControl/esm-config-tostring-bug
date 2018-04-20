# esm config toString

## Behavior

Running an esm based application that has an esm based package w/a `config` package as a dependency, an error is thrown.

- problem occurs when importing a package using `esm` and `config`, into an application also using `esm`
- occurs when both app and package are on 3.0.20

```bash
⇒  npm run start

> esm-app3@1.0.0 start /Users/chamm/esm-nyc-bug/esm-app
> node -r esm index.js

/Users/chamm/esm-nyc-bug/esm-package/node_modules/config/lib/config.js:1
TypeError: Function.prototype.toString requires that 'this' be a Function
    at Proxy.toString (<anonymous>)
    at Function.keys (<anonymous>)
```

## Usage

```bash
# initialize the esm package
cd esm-package;
npm install;
npm link;

# initalize consuming app
cd esm-app
npm install;
npm link esm-package;
npm run start  # throws error: Function.prototype.toString requires that 'this' be a Function
```
