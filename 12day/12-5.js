function solution(d, budget) {
    const sorted = d.sort((a,b)=> a-b)
    let count = 0
    for(let i of sorted){
        budget -= i
        if(budget<0) break
        count++
    }

    return count;
}


const d = [1, 3, 2, 5, 4], budget = 9
console.log(solution(d,budget))