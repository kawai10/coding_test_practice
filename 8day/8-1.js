function solution(s) {
    var answer = ''
    if(s.length % 2 !== 0){
        answer = s.charAt(s.length/2)
    } else {
        answer = s.slice(s.length/2-1, s.length/2+1)
    }

    return answer;
}

const s = 'abcdef'
console.log(solution(s))