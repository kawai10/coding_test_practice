function solution(arr1, arr2) {
    var answer = arr1.map((element,index) => {
        return element.map((element2, index2) => {
            return element2 + arr2[index][index2]
        })
    })
    return answer;
}

const arr1 = [[1, 2], [2, 3]], arr2= [[3, 4], [5, 6]]
console.log(solution(arr1,arr2))