const assert = require("assert");



// Question 1: Longest Common Prefix
  // Write a function to find the longest common prefix string amongst an array of strings.

  // If there is no common prefix, return an empty string "".
/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  // todo...
  return null;
}

const testCases = [
  [["flower","flow","flight"], "fl"],
  [["dog","racecar","car"], ""],
  [["xyzmaklsjdhf", "xyzmapsdfsadfweczxcv", "xyzmalsdfwercxv", "xyzmaesrewrxzcv" ], "xyzma"]
];

// Can comment out when all pass
testCases.forEach(([tc, result]) => {
  const actual = longestCommonPrefix(tc);

  console.log({ tc, actual, result });
  assert.deepStrictEqual(actual, result);
});

console.log("*************************");
console.log("*************************");
console.log("All good!!! Next Question");
console.log("*************************");
console.log("*************************");

// Question 2: API and data munging using https://dog.ceo/dog-api/
  // make a GET request using above API using whatever method you want to get the breeds list: https://dog.ceo/api/breeds/list/all
  // With the returned response, filter out any breeds that don't have any names and just return the number of breeds in the list
  // can console.log out the updated object

  function breedList() {
    // todo...
    return null;
  }