async function getInParallel(apiCalls) {
    // Write your code here
    for (const item of apiCalls){
        return await item;
    }
}
    let promise = getInParallel([() => Promise.resolve("First API call!"),
    () => Promise.resolve("Second API call!")]);
    
    if(promise) {
    promise.then((result) => console.log(result)).catch((err) => console.log(err));
    }
    module.exports.getInParallel = getInParallel;

    /**
     * getInParallel dikasih 2 param api
     * harus di await satu2 di dalem function getInParallel
     * kalo api call sudah selesai , maka tampilka di dalam if(promise)
     *  for (const item of apiCalls) -> buat looping kalo pake for of , 
     *  - dia nunggu satu request bener2 selesai baru lanjut ke request selanjutnya
     *  - jadi antar request pertama dan kedua tidak saling interupt
     */ 