function solution(s) {
    return [...s].sort().reverse().join('')
}

const s = "Zbcdefg"
console.log(solution(s))