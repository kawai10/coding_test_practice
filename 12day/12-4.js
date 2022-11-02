const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

const n  = 45
console.log(solution(n))