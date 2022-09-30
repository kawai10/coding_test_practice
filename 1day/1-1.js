// Testdome


function getInParallel(apiCalls) {
    // Write your code here
    console.log(apiCalls) // [ [Function (anonymous)], [Function (anonymous)] ] 배열 안에 함수 상태로 존재
    console.log(apiCalls.map(fun => fun())) // [ Promise { 'First API call!' }, Promise { 'Second API call!' } ] map을 통해 배열을 순회하면서 함수를 호출하고 다시 배열로 만듬
    console.log(Promise.all(apiCalls.map(fun => fun()))) // Promise { <pending> } 배열 안의 모든 프로미스를 처리하고 결과값을 담은 새로운 프로미스를 반환함
    return Promise.all(apiCalls.map(fun => fun()))
}

let promise = getInParallel([() => Promise.resolve("First API call!"),
    () => Promise.resolve("Second API call!")]);
if(promise) {
    promise.then((result) => console.log(result)).catch((err) => console.log(err));
}
module.exports.getInParallel = getInParallel;