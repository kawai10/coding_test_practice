function solution(n) {
    return [...n+""].reverse().map(arg => Number(arg))
 }

const n = 12345
console.log(solution(n))