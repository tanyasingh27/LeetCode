/*
---------------------------- PROBLEM ------------------------------------
Given an integer, write a function to determine if it is a power of two.

Example 1:

Input: 1
Output: true 
Explanation: 20 = 1
Example 2:

Input: 16
Output: true
Explanation: 24 = 16
Example 3:

Input: 218
Output: false


*/

// ---------------------- IMPLEMENTATION --------------------------------
var isPowerOfTwo = function(n) {
    if(n < 1) return false;
    let r = n.toString(2);    
    let count = 0;
    for(let o of r){
        if(o == '1')
            count++;
    }
    
    return count == 1;    
};