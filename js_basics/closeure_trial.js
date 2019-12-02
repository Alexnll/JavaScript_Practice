function testCount1(){
    var count1 = 0;
    return function(){
        count1++;
        console.log("count1: "+count1);
    }
};

function testCount2(){
    var count2 = 0;
    count2++;
    console.log("count2: "+count2);
};

var a = (function(){
    var c = 0;
    return function(){
        c++;
        console.log("a: "+c);
    }
})();

a();

var plus = testCount1();
plus();
plus();
plus = null;
plus = testCount1();
plus();
plus();

testCount1()();
testCount1()();

testCount2();
testCount2();

