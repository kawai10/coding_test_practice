function solution(s) {
    var answer = '';
    const arr = s.split(' ').map(element => element.split('').map((element2,index) =>{
        if(index % 2 ===0 ){
            return element2.toUpperCase()
        }
        return element2.toLowerCase()
        }).join('')
    ).join(' ')
    return arr
}

const s = "  tRy hello  WORLD    "
console.log(solution(s))