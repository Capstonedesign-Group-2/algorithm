function quickSort(arr) {
    // 길이 체크
    if(arr.length < 2) {
        return arr;
    }

    // 피벗 구하기 (첫번 째 숫자)
    const pivot = arr[0];
    const left = [];
    const right = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else if(arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            pivot.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));

}

let value = [3, 5, 8, 1, 2, 9, 4, 7, 6];

let quick = quickSort(value);

console.log(`Original : ${value}`)
console.log(`Quick Sorted : ${quick}`);
