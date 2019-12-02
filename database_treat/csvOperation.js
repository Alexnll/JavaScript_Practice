var fs = require('fs');

var finalArray = [];

fs.readFile('House_Price.csv', function(err,data){
    var tabe = new Array();
    if(err){
        console.log(err);
        return ;
    }

    // make data into string, and split into array
    const readStr = data.toString();
    const rowArray = readStr.split("\n");
    for (let row in rowArray){
        const cellArray = rowArray[row].split("\,");
        finalArray.push(cellArray);
    }
    console.log(finalArray[0][0]);
    console.log(finalArray[1][0]);
    console.log(finalArray[2][0]);
})
