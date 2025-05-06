const nums = [1, 3, 2];

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var ApproachTwo = function (nums) {
    console.log(nums);
    const N = nums.length;
    let indx = -1;
    for (let i = N - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            //break_point
            indx = i;
            break;
        }
    }
    //Find the just greater element than indx
    if (indx !== -1) {
        for (let i = N - 1; i > indx; i--) {
            if (nums[i] > nums[indx]) {
                swap(nums, i, indx);
                break;
            }
        }
    }
    reverse(nums, indx + 1);
    console.log(nums);
};
var nextPermutation = function (nums) {
    console.log(nums);
    const N = nums.length;
    let i = N - 2;//we have to find first occuring element that is nums[i]<nums[i+1]
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    //found breakpoint
    if (i >= 0) {
        let j = N - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        //found element to swap
        swap(nums, i, j);
    }
    //place right side in sorted order
    reverse(nums, i + 1);
    console.log(nums);
};
function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}
function reverse(nums, start) {
    let end = nums.length - 1;
    while (start < end) {
        swap(nums, start++, end--);
    }
}
ApproachTwo(nums);