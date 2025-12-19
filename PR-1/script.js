//Write a function that takes an array and returns the sum of all elements.
const sumofarray= (arr)=>{
    let sum = 0;
   arr.forEach(value => {
    sum = sum + value;
   });
   return sum;
}
const ans =sumofarray([1,2,3,4,5]);
console.log(ans);

//Write a function that takes an array and returns the maximum element.
const maxvalue = (arr)=>{
    let max = arr[0];
    for(i = 1;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
    }
}
 return max;
}
let ans1 = maxvalue([1,2,3,5,6]);
console.log(ans1);

//Write a function that takes an array and returns the minimum element.
const minofarray = (arr) =>{
    let min= arr[0];
    for(i =1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}
let ans2 = minofarray([1,2,3,4,5]);
console.log(ans2);

//Write a function that takes an array and returns the average of all numbers.
const averageofarray = (average) =>{
    sum = 0;
    average.forEach((num) =>{
        sum = sum + num;
    })
    average = sum / average.length;
    return average;
};
let ans3 = averageofarray([1,2,3,4,5]);
console.log(ans3);

//Write a function that takes an array and returns a new array in reversed order.
function reverseArray(arr) {
    let rev = [];
    let k = 0;
    for (let i = arr.length; i >= 0; i--) {
        rev[k] = arr[i];
        k++;
    }
    return rev;
}
let ans4 = reverseArray([1,2,3,4,5]);
console.log(ans4);

//Write a function that takes an array and returns only even numbers in a new array.
function evenNumber(arr) {
    let even = [];
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even[k] = arr[i];
            k++;
        }
    }
    return even;
}
let ans5 = evenNumber([1,2,3,4,5]);
console.log(ans5);

//Write a function that takes an array and returns only odd numbers in a new array.
function oddNumber(arr) {
    let odd = [];
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odd[k] = arr[i];
            k++;
        }
    }
    return odd;
}
let ans6 = oddNumber([1,2,3,4,5]);
console.log(ans6);

//Write a function that takes an array and counts how many positive numbers are present.
function countPositive(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}
let ans7 = countPositive([1,2,3,4,5]);
console.log(ans7);

//Write a function that takes an array and checks if a given element exists or not.
function elementExists(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return true;
        }
    }
    return false;
}
let ans8 = elementExists([1,2,3,4,5],[6,7,8,9]);
console.log(ans8);

//Write a function that takes an array and returns the index of a given element.
function findIndex(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return i;
}
let ans9 = elementExists([1,2,3,4,5],[1,2,3,4,5]);
console.log(ans9);

//Write a function that takes an array and returns a new array without duplicate values.
function removeDuplicates(arr) {
    let unique = [];
    let k = 0;
    let found;

    for (let i = 0; i < arr.length; i++) {
        found = false;
        for (let j = 0; j < k; j++) {
            if (arr[i] === unique[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            unique[k] = arr[i];
            k++;
        }
    }
    return unique;
}
let and10 = removeDuplicates([1,2,3,3,4,5]);
console.log(and10);

//Write a function that merges two arrays and returns a single array.
function mergeArrays(a, b) {
    let merged = [];
    let k = 0;

    for (let i = 0; i < a.length; i++) {
        merged[k] = a[i];
        k++;
    }
    for (let i = 0; i < b.length; i++) {
        merged[k] = b[i];
        k++;
    }
    return merged;
}
let ans11 = mergeArrays([1,2,3,4,5],[6,7,8,9,]);
console.log(ans11);

//Write a function that takes an array and returns the product of all elements.
function productArray(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product = product * arr[i];
    }
    return product;
}
let ans12 = productArray([1,2,3,4,5]);
console.log(ans12);

//Write a function that sorts an array in ascending order without using .sort().
function sortAscending(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
let ans13 = sortAscending([2,4,6,7,5]);
console.log(ans13);

//Write a function that counts how many times each element appears in an array.
function countFrequency(arr) {
    let freq = {};

    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]] === undefined) {
            freq[arr[i]] = 1;
        } else {
            freq[arr[i]]++;
        }
    }
    return freq;
}
let ans14 = countFrequency([1,2,3,4,5]);
console.log(ans14);

//Write a function that rotates an array by given positions (e.g., 1 → 2 → 3 → 1).
function rotateArray(arr, pos) {
    for (let p = 0; p < pos; p++) {
        let first = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = first;
    }
    return arr;
}
let ans15 = rotateArray([1,2,3,4,5],4);
console.log(ans15);

//Write a function that takes an array of strings and returns the longest string.
function longestString(arr) {
    let longest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
let ans16 = longestString(['Darshan','aakash','dipak','jay']);
console.log(ans16);

//Write a function that checks whether an array is symmetric 
function Symmetric(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
let ans17 = Symmetric([1, 2, 3, 2, 1]);
console.log(Symmetric(ans17));

