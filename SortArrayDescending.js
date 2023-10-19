function sortArrayDescending(arr) {
    arr.sort((a, b) => b - a);
}

const numbers = [4, 9, 2, 8, 5, 1];
sortArrayDescending(numbers);
console.log(numbers);