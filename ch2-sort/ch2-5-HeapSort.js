function heapSort(arr) {
    // 힙으로 만들기 위해 배열의 인덱스 값 추출
    let a = [...arr];
    let len = a.length;

    // 힙에서 큰값과, 작은값 비교 후 최대 힙 성질에 적합하게 재배치
    const heapify = (a, i) => {
        const small = 2 * i + 1;
        const large = 2 * i + 2;
        let largest = i;
        
        // 작은수 검사
        if(small < len && a[largest] < a[small]) {
            largest = small;
        }

        // 큰수 검사
        if(large < len && a[largest] < a[large]) {
            largest = large;
        }

        // 값 치환
        if(largest !== i) {
            [a[largest], a[i]] = [a[i], a[largest]];
            heapify(a, largest);
        }

    }; // heapify

    // 반복문으로 배열에서 최대 힙 제작 (배열의 중간 인덱스에서 시작)
    // Math.floor을 사용해서 배열에 인덱스가 홀수인 경우에도 반올림 해서 중간 인덱스 지정
    for(let i = Math.floor(len / 2); i >= 0; i-=1) {
        heapify(a, i);
    }
    
    // 힙 정렬
    for(i = a.length - 1; i > 0; i--) {
        [a[0], a[i]] = [a[i], a[0]];
        // 큰값 빼내고 난 후 남은 수들로 힙 재구성
        len--;
        heapify(a, 0);
    }

    return a;
};

let value = [1, 6, 7, 8, 9, 3, 5, 4, 2];

console.log(`Original : ${value}`)
console.log(`Heap Sorted : ${heapSort(value)}`);