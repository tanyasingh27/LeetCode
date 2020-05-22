/*
---------------------------- PROBLEM ------------------------------------
 Given a non-empty array of integers, every element appears twice except for one. Find that single one.

 Example 1:

 Input: [2,2,1]
 Output: 1
 Example 2:

 Input: [4,1,2,1,2]
 Output: 4
*/

// ---------------------- IMPLEMENTATION --------------------------------
var singleNumber = function(nums) {
    let singleNum = nums[0];
    for(let i=1; i< nums.length ; i++ ){
        singleNum = singleNum ^ nums[i];        
    }
    return singleNum ;
};