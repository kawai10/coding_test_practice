function solution(n) {
    var answer = '';
    const str1 = '수'
    const str2 = '박'
    for(let i = 1; i<n+1; i++ ){
        i % 2 === 0 ? answer += str2 : answer += str1
    }
    return answer
}

const n = 3
console.log(solution(n))