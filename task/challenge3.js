function getInParallel(apiCalls) {
    // Write your code here
    }
    let promise = getInParallel([() => Promise.resolve("First API call!"),
    () => Promise.resolve("Second API call!")]);
    
    if(promise) {
    promise.then((result) => console.log(result)).catch((err) => console.log(err));
    }
    module.exports.getInParallel = getInParallel;