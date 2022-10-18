//약수의 개수가 홀수인 숫자는 숫자에 루트를 적용했을 경우 정수가 나옴 ex)16 -> 1,2,4,8,16. 자기 자신을 두번 곱한 숫자가 있기 때문.

function solution(left, right) {
    let answer = 0;
    for(let i=left; i<right+1; i++){
        answer = Number.isInteger(Math.sqrt(i)) ? answer - i : answer + i
    }
    return answer;
}


console.log(solution(13,17))