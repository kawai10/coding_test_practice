function solution(x) {
    let num = 0
    const array = [...String(x)]
    array.map((arg) => {
        num += Number(arg)
    });

    return x % num === 0

}

const x = 10
console.log(solution(x))