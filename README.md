# esm import undefined bug

## Behavior

![demonstration](https://i.imgur.com/3lCbyhP.gif "demonstration")

- problem occurs when importing a package using `esm`, into an application also using `esm`
- occurs with 3.0.6 and 3.0.7
- problem appears to manifest itself randomly. tends to clear itself up after editing files.
- notice the console.log() in the tests that outputs the import from the package - when failure occurs the value is 'undefined'

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

# tests may or may not fail, depending on the weather
npm t
```
