// 프로그래머스 K번째수

function solution(array, commands) {
    var answer = [];
    commands.forEach(ele => {
        let start = ele[0]-1
        let end = ele[1]
        let location = ele[2]-1
        let newArray = array.slice(start,end).sort((a,b) => a - b)
        let num = newArray[location]
        answer.push(num)

    })
    return answer;
}

// best answer

function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)

        return newArray[position - 1]
    })
}