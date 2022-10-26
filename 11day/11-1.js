function solution(a, b, n) {
    var answer = 0;
    while(a<=n){
        answer += Math.floor(n/a) * b
        n = Math.floor(n/a) * b + n%a

    }
    return answer;
}

const n = 20, a=3, b=1
console.log(solution(a,b,n))