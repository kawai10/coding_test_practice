function solution(n, arr1, arr2) {
    var answer = []

    for(let i =0; i<n; i++){
        let a = arr1[i].toString(2).padStart(n,'0')
        let b = arr2[i].toString(2).padStart(n,'0')

        let result = a.split('').reduce((final,cur,idx) => {
            if(cur === '0' && b[idx]==='0'){
                final += ' '
            } else {
                final += '#'
            }
            return final
        },'')

        answer.push(result)
    }

    return answer
}


const n = 5
const arr1= [9, 20, 28, 18, 11], arr2 = [30, 1, 21, 17, 28]


console.log(solution(n,arr1, arr2))


/**Best answer **/

function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}