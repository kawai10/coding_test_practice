// 프로그래머스 폰켓몬

function solution(nums) {
    var answer = 0
    const setedCount = new Set(nums).size
    if(parseInt(setedCount) < nums.length/2){
        answer = setedCount
    } else {
        answer = nums.length/2
    }

    return answer;
}


// best answer
function solution(nums) {
    const max = nums.length / 2;
    const arr = [...new Set(nums)];

    return arr.length > max ? max : arr.length
}

