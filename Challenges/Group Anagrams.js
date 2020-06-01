/*
---------------------------- PROBLEM ------------------------------------
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

*/

// ---------------------- IMPLEMENTATION --------------------------------
var groupAnagrams = function(strs) {
    let obj = {};
    let arr = [];
    for(let s of strs){
        debugger;
        let tempKey = s.split('').sort().join('');
        if(!obj.hasOwnProperty(tempKey)){
          obj[tempKey] = [s] ;
        }
        else {
            obj[tempKey].push(s);
        } 
    }
    for (let o in obj){
       arr.push(obj[o]);
    }
  return arr;
};