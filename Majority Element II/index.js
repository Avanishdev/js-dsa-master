// const nums = [1, 2, 2, 3, 2];
const nums = [11, 33, 33, 11, 33, 11];

let majorityElementHelper = (nums) => {
    const N = nums.length;
    let majority_element_1 = nums[0];
    let count_1 = 1;
    let majority_element_2 = nums[1];
    let count_2 = 1;
    for (let i = 2; i < N; i++) {
        if (count_1 === 0) {
            majority_element_1 = nums[i];
            count_1++;
        }
        else if (count_2 === 0) {
            majority_element_2 = nums[i];
            count_2++;
        }
        else if (nums[i] === majority_element_1) {
            count_1++;
        }
        else if (nums[i] === majority_element_2) {
            count_2++;
        }
        else {
            count_1--;
            count_2--;
        }
    }
    count_1 = 0;
    count_2 = 0;

    for (let i = 0; i < N; i++) {
        if (nums[i] === majority_element_1) {
            count_1++;
        } else if (nums[i] === majority_element_2) {
            count_2++;
        }
    }
    let res = [];
    if (count_1 > Math.floor(N / 3)) {
        res.push(majority_element_1);
    }
    if (count_2 > Math.floor(N / 3)) {
        res.push(majority_element_2);
    }
    return res;
}

console.log(majorityElementHelper(nums));