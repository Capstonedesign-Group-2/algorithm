function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        // 제일 좌측 값 정렬완료
        let sorted = arr[i];

        console.log(`Sorting... : ${arr}, 조작완료 값: ${arr[i]}`);

        // 미탐색 영역에서 하나 선택
        let j = i - 1;
        // 좌측의 정렬 완료시킨 값과 비교
        while((j >= 0) && (sorted < arr[j])) {
            arr[j + 1] = arr[j];
            j--;
        }
        // 계산된 값 치환
        arr[j + 1] = sorted;
    };
    return arr;
};


let value = [5, 3, 4, 7, 2, 8, 6, 9, 1];
console.log(`Original : ${value}`)
console.log(`Insertion Sorted : ${insertionSort(value)}`);