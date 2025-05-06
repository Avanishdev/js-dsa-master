function countReversals(arr) {
    //Step 1 :- if length equals odd, return -1
    if (arr.length % 2 !== 0) {
        return -1;
    }
    //Step 2 :- remove valid part
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '{') {
            stack.push(arr[i]);
        } else {
            // close bracket }
            if (stack.length > 0 && stack[stack.length - 1] === '{') {
                stack.pop();
            } else {
                stack.push(arr[i]);
            }
        }
    }
    //Step 3 :- we'll have invalid expression, count open and close 
    let open = 0, close = 0;
    for (let char of stack) {
        if (char === '{') open++;
        else close++;
    }

    return Math.ceil((open + 1) / 2) + Math.ceil((close + 1) / 2);
}

console.log(countReversals("}{{}}{{{")); // Output: 3