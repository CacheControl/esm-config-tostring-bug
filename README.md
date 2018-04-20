# esm import undefined bug

## Behavior

- problem occurs when importing a package using `esm` and `config`, into an application also using `esm`
- occurs with 3.0.20

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
