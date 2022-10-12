function solution(s){

    lowests = s.toLowerCase()
    const p = [...lowests.matchAll(/p/g)].length
    const y = [...lowests.matchAll(/y/g)].length

    return p === y
}


const n = "pPoooyY"
console.log(solution(n))