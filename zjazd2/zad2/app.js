const utils = require("./utils");

const tabA = ["ala", "ma", "kota"];
const tabB = ["ala", "ma", "psa"];

console.log(utils.diff(tabA, tabB));
console.log(utils.diff(tabB, tabA));
