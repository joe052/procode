/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [8, 3, 1, 12, 14, 4, 8];
let target = 13;

const twoSum = function (nums, target) {
  let output = [];

  outerLoop: for (let i = 0; i < nums.length; i++) {
    /**Pick the number you are at */
    const cursor = nums[i];

    /**ADD THE NUMBER TO ANY OTHER NUMBER IN THE ARRAY OTHER THAN ITSELF
     *  AND TRY TO FIND IF IT MAYTCHES THE TARGET */
    for (let j = 0; j < nums.length; j++) {
      if (i == j) continue;
      console.log(j);
      const result = cursor + nums[j];
      if (result == target) {
        output.push(i, j);
        break outerLoop;
      }
    }
  }
  return output;
};

const result = twoSum(nums, target);
console.log(result);
