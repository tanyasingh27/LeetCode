/*
---------------------------- PROBLEM ------------------------------------
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.


*/

// ---------------------- IMPLEMENTATION --------------------------------
var findMaxLength = function(nums) {
    // Creating a map to store sum and index
    let map = new Map();
    // Setting initial sum and index in map
    map.set(0, -1);  
    // Created variable which will return the max length of sub-array
    let maxLen = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        // Adding to -1 when 0 found else 1
        sum += (nums[i] == 0) ? -1 : 1;
        // If map has the sum already then compare it with current maxLen, else set it in map
        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum));
        }
        else {
            map.set(sum, i);
        }
    }  
    return maxLen;
};