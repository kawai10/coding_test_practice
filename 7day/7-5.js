function solution(arr, divisor) {
    let answer = arr.filter(element => element % divisor ===0).sort((a,b) => a-b)
    return answer.length === 0 ? [-1] : answer
}


const arr = [3, 2, 6], divisor = 10
console.log(solution(arr, divisor))