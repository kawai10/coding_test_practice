function solution(n) {
    return +[...(n+"")].sort((a,b)=> b-a).join("");
}

const n = 118372
console.log(solution(n))