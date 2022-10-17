function solution(s) {
    const regex = /^\d+$/
    if(s.length ===4 || s.length === 6){
        return regex.test(s)
    } else {
        return false
    }
}

const s = "1123a"
console.log(solution(s))