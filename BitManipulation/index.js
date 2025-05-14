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

function binaryToDecimal(n) {
    let index = 0;
    let result = 0;
    while (n !== 0) {
        let lastDigit = n % 10;
        if (lastDigit === 1) {
            result = result + Math.floor(Math.pow(2, index));
        }
        index++;
        n = n / 10;
    }
    return result;
};

console.log("binaryToDecimal", binaryToDecimal(1011)); // 11

function decimalToBinaryString(num) {//10
    let result = "";
    while (num !== 0) {
        let lastBit = num & 1;
        result = lastBit + result;
        num = num >> 1;
    }
    return result;
}

console.log("decimalToBinary", decimalToBinaryString(10)); // "1010"

