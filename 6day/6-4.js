function solution(n) {
    let answer = 0;

    for(let i = 1; i<n; i++){
        console.log(`${n} ${i}`)
        if(n%i === 1) return answer=i
    }
}

const n = 10
console.log(solution(n))