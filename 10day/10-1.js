function solution(A,B){
    A = A.sort((a,b) => a-b)
    B = B.sort((a,b) => b-a)

    const answer = A.reduce((acc,cur,idx) =>{
        return acc + A[idx] * B[idx]
    },0)

    return answer;
}


const A=[1,4,2], B=[5,4,4]
console.log(solution(A,B))


/**Best answer**/

function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}
