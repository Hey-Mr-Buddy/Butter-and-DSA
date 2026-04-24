// Butter and DSA - leetcode problem 1.
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.


//Solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var TwoSum = function(nums, target) {
    let map = new Map();

    for(let i=0; i< nums.length; i++) {

        let complement = target - nums[i];

        if(map.has(complement)) {
            return [i, map.get(complement)];
        }

        map.set(nums[i], i);
    }
}



//Concepts Tackled:
/**
 * Hash Map in JS and its Applications
 */