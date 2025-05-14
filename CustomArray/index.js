class MyArray {
    constructor(length = 0) {
        this.length = length;
        // this.items = new Array(length);
        this.items = [];
        this.items.length = length;
        this.currentIndex = 0;
    }
    push(item) {
        //apply dynamic array
        if (this.currentIndex === this.items.length) {
            let temp = [];
            temp.length = this.items.length * 2;
            for (let i = 0; i < this.items.length; i++) {
                temp[i] = this.items[i];
            }
            this.items = temp;
            this.length = temp.length;
        }
        this.items[this.currentIndex] = item;
        this.currentIndex++;
    }
    pop(index) {
        if (this.currentIndex === 0) return undefined;
        if (index >= this.items.length) {
            console.log("Error: Index out of bounds!");
            console.error("Index out of bounds!");
            // throw new RangeError("Index out of bounds!");
        }
        let lastItem = this.items[index];
        for (let i = index; i < this.items.length - 1; i++) {
            this.items[i] = this.items[i + 1];
        }
        this.currentIndex--;
        this.items[this.currentIndex] = undefined;
        return lastItem;
    }
    sort() {
        console.log("Happy sorting!");
        return this.items.sort();
    }
    at(index) {
        if (this.currentIndex <= index) {
            console.log("Error: Index out of bounds!");
            console.error("Index out of bounds!");
            // throw new RangeError("Index out of bounds!");
        }
        return this.items[index];
    }
    indexOf(item) {
        //Linear Search
        for (let i = 0; i < this.currentIndex; i++) {
            if (item === this.items[i]) {
                return i;
            }
        }
        return -1;
    }
    //Do not uncomment
    // indexOfAdvanced(item) {
    //     this.items.sort();
    //     //Binary Search
    //     let start = 0;
    //     let end = this.currentIndex - 1;
    //     while (start <= end) {
    //         const mid = Math.floor(start + end / 2);
    //         if (this.items[mid] === item) {
    //             return mid;
    //         }
    //         else if (this.items[mid] < item) {
    //             start = mid + 1;
    //         } else {
    //             end = mid - 1;
    //         }
    //     }
    //     return -1;
    // }
    max() {
        let maxi = this.items[0];
        for (let i = 0; i < this.currentIndex; i++) {
            if (this.items[i] > maxi) {
                maxi = this.items[i];
            }
        }
        return maxi;
    }
    min() {
        let mini = this.items[0];
        for (let i = 0; i < this.currentIndex; i++) {
            if (this.items[i] < mini) {
                mini = this.items[i];
            }
        }
        return mini;
    }
    reverse() {
        let start = 0;
        let end = this.currentIndex;
        while (start < end) {
            let temp = this.items[end];
            this.items[end] = this.items[start];
            this.items[start] = temp;
            start++;
            end--;
        }
        console.log("Happy reversing!");
    }
    print() {
        let temp = this.items.filter((item) => item !== undefined && item !== null && item !== "");
        console.log(temp);
        return temp;
    }
};

const arr = new MyArray(5);
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(5);
arr.push(4);
// arr.push(6);
// arr.pop(4);
// console.log(arr.pop(5));

console.log(arr.length);
console.log(arr.items);
console.log(arr.items.length);
console.log(arr.currentIndex);
console.log("Linear Search --> Index of 5: ", arr.indexOf(5));
// console.log(arr.at(6));
arr.sort();
console.log(arr.max());
console.log(arr.min());
arr.reverse();
// console.log("Binary Search --> Index of 5: ", arr.indexOfAdvanced(5));
arr.print();