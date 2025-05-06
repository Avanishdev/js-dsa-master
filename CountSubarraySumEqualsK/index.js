const nums = [3, 1, 2, 4];
const K = 6;

const countSubaarySumEqualsK = (nums, k) => {
    let N = nums.length;
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(sum, 1);//initially push (0,1) in map.
    for (let i = 0; i < N; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);//push count=1, if (sum-k) is not present and add count+1 if present.
    }
    return count;
}

console.log(countSubaarySumEqualsK(nums, K));