/*
 ---------------------------- PROBLEM ------------------------------------
 Given an integer array nums, find the contiguous subarray (containing at least one number) 
 which has the largest sum and return its sum.

 Example:
 Input: [-2,1,-3,4,-1,2,1,-5,4],
 Output: 6
 Explanation: [4,-1,2,1] has the largest sum = 6.
*/

// ---------------------- IMPLEMENTATION --------------------------------
var maxSubArray = function(nums) {
    //@maxSum to store maximum sum in array.
    let maxSum = nums[0];
    //@partialSum to store temporary sum calculated.
    let partialSum =0;
  
    for (let item = 0; item < nums.length ; item++) { 
      partialSum += nums[item]; 
      //Assign maximum of the partialSum and maxSum to maxSum.
      maxSum = Math.max(maxSum, partialSum); 
      //If partialSum is negative assign zero to it.
      if (partialSum < 0) partialSum = 0; 
    }  
    //Maximum sum found is returned.
    return maxSum;
};