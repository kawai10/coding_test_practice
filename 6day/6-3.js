function solution(s){
    if(s[0] === ')'){
        return false
    }

    let result = 0
    for(let i=0; i<s.length; i++){
        if(s[i] === '('){
            result += 1
        } else {
            result -=1
            if(result <0) return false
        }
    }
    return result === 0 ? true : false
}

const s = "(())()"
console.log(solution(s))