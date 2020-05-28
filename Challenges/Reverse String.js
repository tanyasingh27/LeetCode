/*
---------------------------- PROBLEM ------------------------------------
Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 
Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

*/

// ---------------------- IMPLEMENTATION --------------------------------
var reverseString = function(s) {
    let rptr = s.length-1;
    let lptr = 0;
    while(rptr > lptr){
        let temp = s[rptr];
        s[rptr] = s[lptr];
        s[lptr] = temp;
        rptr--;
        lptr++;
    }
};