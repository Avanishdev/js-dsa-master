//Maximum Subarray Sum

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let kadanesAlgorihtm = (nums) => {
    let maximum_sum = nums[0];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i]);
        maximum_sum = Math.max(sum, maximum_sum);
    }
    return maximum_sum;
}

console.log(kadanesAlgorihtm(nums));