function solution(num) {
    if(num ===1){
        return 0
    }

    let count = 0
    function collatz(repeatNum){
        if(count > 499) return -1
        if(repeatNum === 1) return count
        count++;
        repeatNum % 2 === 0 ? collatz(repeatNum/2) : collatz(repeatNum*3+1)
    }

    collatz(num)
    return count > 499 ? -1 : count
}

const num = 626331
console.log(solution(num))