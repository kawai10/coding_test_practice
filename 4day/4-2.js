// 프로그래머스 완전탐색 모의고사

function solution(answers) {
    const math1 = [1,2,3,4,5]
    const math2 = [2,1,2,3,2,4,2,5]
    const math3 = [3,3,1,1,2,2,4,4,5,5]
    var answer = [];
    let score = [0,0,0]
    for(let i = 0; i<answers.length; i++){
        if (answers[i] === math1[i%math1.length]) score[0]++
        if (answers[i] === math2[i%math2.length]) score[1]++
        if (answers[i] === math3[i%math3.length]) score[2]++
    }
    for(let i=0; i<score.length; i++){
        if(score[i] !== 0 && Math.max(...score) === score[i]) answer.push(i+1)
    }
    answer.sort((a,b) => a-b)
    return answer
}

answers = [3, 3, 1, 1, 1, 1, 2, 3, 4, 5]
console.log(solution(answers))


//best answer
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}