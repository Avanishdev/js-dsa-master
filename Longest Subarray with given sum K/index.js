// const nums = [2, 3, 5];
const nums = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
const K = 3;

const longestSubarrayWithGivenSumK = (nums, K) => {
    let max_length = 0;
    let sum = 0;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === K) {
            max_length = Math.max(i + 1, max_length);
        }
        if (map.has(sum - K)) {
            max_length = Math.max(i - map.get(sum - K), max_length);
        }
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }
    return max_length;
}

const longestSubarrayWithGivenSumKOnlyPoistives = (nums, K) => {
    const N = nums.length;
    let left = 0;
    let right = 0;

    let sum = nums[0];
    let maximum_length = 0;

    while (right < N) {
        //right age badhane se pehle, update left
        while (left <= right && sum > K) {
            sum -= nums[left];
            left++;
        }
        if (sum === K) {
            maximum_length = Math.max(right - left + 1, maximum_length);
        }
        right++;
        if (right < N) {
            sum += nums[right];
        }
    }

    return maximum_length;
}

console.log(longestSubarrayWithGivenSumKOnlyPoistives(nums, K));