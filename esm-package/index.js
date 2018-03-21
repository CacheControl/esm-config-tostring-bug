require = require('esm')(module)
const MyClass = require('./import').default
module.exports = {
  MyClass,
}
