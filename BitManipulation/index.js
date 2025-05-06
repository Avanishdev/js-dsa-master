function decimalToBinary(num) {
    let rem = [];
    while (num > 0) {
        rem.push(num % 2);
        num = Math.floor(num / 2);
    }
    rem.reverse();
    return rem;
};
// decimalToBinary(17);

function countNoof1bits(num) {
    let count = 0;
    while (num !== 0) {
        let last_bit = num & 1;
        if (last_bit === 1) {
            count++;
        }
        num = num >> 1;
    }
    return count;
}
console.log(countNoof1bits(10));//1010 -> 2
function countingBits(num) {
    let res = [];
    for (let i = 0; i <= num; i++) {
        res.push(countNoof1bits(i));
    }
    return res;
}
console.log(countingBits(5))
// 011
// 101 &
// 001 -> 1
console.log(3 & 5)
// 011
// 101 | 
// 111 -> 7
console.log(3 | 5);