/*
---------------------------- PROBLEM ------------------------------------
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)


*/

// ---------------------- IMPLEMENTATION --------------------------------
var productExceptSelf = function(nums) {
    debugger;
    let total=1, zero = 0 ;
    for(let a of nums){
      if(a!= 0){
         total *= a;
        }
      else{
         zero++;
        }
    }
    if(zero>1) total = 0;
    
     for(let i=0; i<nums.length ; i++){
      if(nums[i]==0){
        nums[i] = total;
      }
      else if(zero){
          nums[i] = 0;
        }
      else {
        nums[i] = total/nums[i];
      }
    }
    return nums;
};
