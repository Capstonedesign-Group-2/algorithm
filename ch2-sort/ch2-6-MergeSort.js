function mergeSort(arr) {
    // 길이 체크
    if(arr.length < 2) {
        return arr;
    }

    // 가운데 값을 기준으로 좌, 우측 배열 나눔
    let middle = Math.ceil(arr.length / 2);
    let arr1 = arr.slice(0, middle);
    let arr2 = arr.slice(middle);

    return merge(mergeSort(arr1), mergeSort(arr2));

    function merge(arr1, arr2) {
        // 쪼개는 배열 생성
        const resultArr = []; // 최종 결과
        let arr1Idx = 0; // 최초에 좌측으로 나누어진 배열
        let arr2Idx = 0; // 최초에 우측으로 나누어진 배열

        // 반복하며 배열을 쪼개고 정렬 수행
        while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
            if(arr1[arr1Idx] < arr2[arr2Idx]) {
                resultArr.push(arr1[arr1Idx]);
                arr1Idx++;
            } else {
                resultArr.push(arr2[arr2Idx]);
                arr2Idx++;
            }
        }

        // 정렬된 값을 최종 배열에 병합
        return resultArr.concat(arr1.slice(arr1Idx), arr2.slice(arr2Idx));
    }
};

let value = [1, 6, 7, 8, 9, 3, 5, 4, 2];

console.log(`Original : ${value}`)
console.log(`Merge Sorted : ${mergeSort(value)}`);