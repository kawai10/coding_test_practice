//가우스 덧셈공식
function solution(a, b) {
    return (Math.abs(a-b)+1)*((a+b)/2);
}


const a = 3, b = 5
console.log(solution(a,b))