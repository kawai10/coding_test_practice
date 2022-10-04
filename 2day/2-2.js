function createCheckDigit(membershipId) {
    let subResult = sub(membershipId)
    while(parseInt(subResult) > 9) {
        subResult = sub(subResult)
    }
    return subResult;
}

function sub(membershipId){
    return membershipId.toString().split('').reduce((a,b) => parseInt(a) + parseInt(b), 0)
}

console.log(createCheckDigit("55555"));