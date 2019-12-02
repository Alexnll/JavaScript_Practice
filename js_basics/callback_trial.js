function doSomething(callback){
    callback(1, 2);
};

function numberAdd(a, b){
    console.log(a+b);
}


doSomething(numberAdd);