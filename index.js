'use strict';

const fp = require('./lib/fp.js');

module.exports = exports = {};

process.argv.slice(2).forEach(
  (val, index, array) => fp.map(array,
    (ele) => console.log(ele.toUpperCase())));
