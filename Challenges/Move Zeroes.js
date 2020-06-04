/*
 ---------------------------- PROBLEM ------------------------------------
Given an array nums, 
write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

// ---------------------- IMPLEMENTATION --------------------------------
var moveZeroes = function(nums) {
    // @item to iteratre through the input array.
    // @ptr to point towards the zero.
    let item=0, ptr =0;
    while(item<nums.length){
        //if current element is non-zero.
        if(nums[item] !=0){  
             //if @ptr and @item doesn't points to same element otherwise no need to replace.        
             if( item != ptr){                 
                 //destructuring to replace zero with non-zero element.
                 [nums[item],nums[ptr]] = [nums[ptr],nums[item]];
                }
             ptr++;
        }            
      item++;
    }
};