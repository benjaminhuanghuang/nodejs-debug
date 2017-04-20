const R = require('ramda');
const root = x => x ** (1/2);
const nums = R.range(1, 10);
const cubes = R.map(n => n ** 3, nums);
const rootCubes = R.map(root, cubes);