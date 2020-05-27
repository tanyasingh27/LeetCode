/*
---------------------------- PROBLEM ------------------------------------
 Write an algorithm to determine if a number is "happy".
 A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 Example: 

 Input: 19
 Output: true
 Explanation: 
 12 + 92 = 82
 82 + 22 = 68
 62 + 82 = 100
 12 + 02 + 02 = 1
*/

// ---------------------- IMPLEMENTATION --------------------------------
var maxProfit = function(prices) {  
    let buyValue = prices[0];
    let profitValue = 0;
    for(let p=1; p < prices.length ; p++){
        if(buyValue > prices[p]){
            buyValue = prices[p];
            continue;
        }
        else if( prices[p+1] < prices[p] && prices[p+1] != null){
            profitValue += prices[p] - buyValue;
            buyValue = prices[p+1];
        }
        else if (!prices[p+1]){
            profitValue += prices[p] - buyValue;
        }
     }
    return profitValue;
 }
 console.log(maxProfit([7,1,5,3,6,4]));