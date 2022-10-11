function solution(n){
    var answer = 0
    const number = String(n)
    const array = [...number]
    array.map((arg) => {
        answer += Number(arg)
    });
    return answer;
}

n = 123
console.log(solution(n))