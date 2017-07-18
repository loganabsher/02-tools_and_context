'use strict';

module.exports = exports = {}

exports.map = (arr, callback) => {
  if(typeof(arr) !== "object") return 'first parameter must be array';
  if(typeof(callback) !== "function") return 'second parameter must be callback function';
  return Array.prototype.map.call(arr, callback);
};

let mapResults = exports.map([1, 2, 3], (ele) => ele * 2);
console.log('map results:', mapResults);

exports.filter = (arr, callback) => {
  if(typeof(arr) !== "object") return 'first parameter must be array';
  if(typeof(callback) !== "function") return 'second parameter must be callback function';
  return Array.prototype.filter.call(arr, callback);
};

let filterResults = exports.filter([1, 2, 3], (ele) => ele >= 2);
console.log('filter results:', filterResults);

exports.reduce = (arr, callback) => {
  if(typeof(arr) !== "object") return 'first parameter must be array';
  if(typeof(callback) !== "function") return 'second parameter must be callback function';
  return Array.prototype.reduce.call(arr, callback);
};

let reduceResult = exports.reduce([1, 2, 3], (ele, i) => ele + i);
console.log('reduce results:', reduceResult);

exports.concat = (arrOne, arrTwo) => {
  if((typeof(arrOne) !== "object") || (typeof(arrTwo) !== "object")) return 'must have two arrays as parameters';
  return Array.prototype.concat.apply(arrOne, arrTwo);
};

let concatResult = exports.concat([1, 2, 3], [4, 5, 6]);
console.log('concat results:', concatResult);

exports.splice = (arr, parameters) => {
  if(typeof(arr) !== "object") return 'first parameter must be array';
  return Array.prototype.splice.call(arr, parameters);
};

let spliceResults = exports.splice([1, 2, 3], (1, 1));
console.log('splice results:', spliceResults);
