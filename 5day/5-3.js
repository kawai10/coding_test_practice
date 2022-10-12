function solution(s) {
    var answer = 0;
    answer = s.split("").reduce((acc, cur) => {
        return acc + cur
    })
    return Number(answer);
}


const s = "-1234"
console.log(solution(s))