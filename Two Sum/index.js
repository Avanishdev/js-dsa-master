const nums = [2, 6, 5, 8, 11];
const target = 14;

var TwoSumHelper = function (nums, target) {
    const N = nums.length;

    let map = new Map();

    for (let i = 0; i < N; i++) {
        let difference = target - nums[i];
        if (map.has(difference)) {
            return [map.get(difference), i];
        }
        map.set(nums[i], i);
    }

    return [-1, -1];
}

console.log(TwoSumHelper(nums, target));