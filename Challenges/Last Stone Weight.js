/*
 ---------------------------- PROBLEM ------------------------------------
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

*/

// ---------------------- IMPLEMENTATION --------------------------------
var lastStoneWeight = function(stones) {
    if(stones.length <= 1){
        return (stones.length == 1) ? stones[0] : 0 ;
    }
    stones.sort((a,b) => {return a-b});
    let maxWeightStone = stones[stones.length - 1];
    stones.pop();    
    let secondMaxWeightStone = stones[stones.length - 1];
    stones.pop();
    let temp = (maxWeightStone == secondMaxWeightStone) ? 0 : maxWeightStone - secondMaxWeightStone;
    if(temp != 0)
        stones.push(temp);
    return lastStoneWeight(stones);       
};