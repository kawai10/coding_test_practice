function solution(s) {
    let count = 0
    let numberOfZero = 0

    while(s.length > 1){
        let num = 0

        for(let i = 0; i<s.length; i++){
            if(s.charAt(i) === '0'){
                numberOfZero++
            } else {
                num++
            }
        }
        s = num.toString(2)
        count++
    }
    return [count, numberOfZero];
}


const s= "110010101001"
console.log(solution(s))