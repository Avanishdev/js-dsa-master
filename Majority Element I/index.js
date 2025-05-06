const nums = [3, 2, 3];

let majorityElementI = (nums) => {
    const N = nums.length;
    let majority_element = nums[0];
    count = 1;
    for (let i = 1; i < N; i++) {
        if (count === 0) {
            majority_element = nums[i];
            count++;
        }
        else if (majority_element === nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    count = 0;
    for (let i = 0; i < N; i++) {
        if (majority_element === nums[i]) {
            count++;
        }
    }
    if (count > Math.floor(N / 2)) {
        return majority_element;
    }
    return -1;
}

console.log(majorityElementI(nums));