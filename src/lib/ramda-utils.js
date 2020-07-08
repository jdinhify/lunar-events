// extracted from @panosoft/ramda-utils

var R = require('ramda')

var Ru = R.map(R.curry, {
  compareProps: (props, a, b) => {
    // determine property compare function (lt or gt) based on + or -
    var propCompares = R.map((prop) => (prop[0] === '-' ? R.gt : R.lt), props)
    // remove + and - from property names
    props = R.map(R.replace(/^(-|\+)/, ''), props)
    // determine which properties are equal
    var equalProps = R.map((prop) => R.equals(a[prop], b[prop]), props)
    // find first non-equal property
    var index = R.findIndex(R.equals(false), equalProps)
    // if found then compare that property
    if (index >= 0) {
      return R.comparator(propCompares[index])(a[props[index]], b[props[index]])
    }
    // return all properties equal
    return 0
  },
})

module.exports = Ru