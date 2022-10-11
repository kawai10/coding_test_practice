function solution(n) {
    var answer;
    const sqrt = Math.sqrt(n)
    if(Number.isInteger(sqrt)){
        answer = (sqrt+1)**2
    } else {
        answer = -1
    }

    return answer;
}


const n = 3
console.log(solution(n))