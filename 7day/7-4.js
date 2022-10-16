function solution(phone_number) {
    const length = phone_number.length
    return `${'*'.repeat(length-4)}${phone_number.substring(length-4, length)}`;
}

const phone_number = "01033334444"
console.log(solution(phone_number))