function solution(numbers) {
    let answer = 0
    numbers.forEach(v => {
        answer += v
    })

    return 45 - answer
}


const numbers = [1, 2, 3, 4, 6, 7, 8, 0]
console.log(solution(numbers))