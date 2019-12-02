var sqlite3 = require('sqlite3').verbose();


// create or link to database
var db = new sqlite3.Database('PigmentProduct.db');

// SQL command
// create table
// Product Name field should be NOT NULL UNIQUE
const createBCE_Product = "CREATE TABLE BCE_Product ('Product Name' TEXT NOT NULL UNIQUE, Company TEXT, 'INternal Product' TEXT, 'Old Name' TEXT, 'Colour Index' TEXT, Color TEXT, Chemistry TEXT)";
const createCompetitor_Product = "CREATE TABLE Competitor_Product (Competitor TEXT, 'Product Name' TEXT NOT NULL UNIQUE, 'Colour Index' TEXT, Color TEXT, Chemistry TEXT, 'Commit' TEXT)";

// delete table
const deleteBCE_Product = "DROP TABLE .BCE_Product"
const deleteCompetitor_Product = "DROP TABLE .Competitor_Product"

// query data from database


// update or add or delete data from database
const insertBCE_Product = "INSERT INTO BCE_Product VALUES (?,?,?,?,?,?,?)";
const insertCompetitor_Product = "INSERT INTO Competitor_Product (?,?,?,?,?,?)";

// operation
// create table
db.serialize(function(){
    db.run(createBCE_Product);
    db.run(createCompetitor_Product);
});

// insert data
db.serialize(function(){
    var insertBCE = db.prepare(insertBCE_Product);
    for (let i = 0;  ; i++){

    }
    insertBCE.finalize();
})

db.close(function(){
    console.log("Successfully close database.");
});

// db.serialize(function(){
// db.run("CREATE TABLE user (id INT, dt TEXT)");

//     var stmt = db.prepare("INSERT INTO user VALUES (?,?)");
//     for(var i = 0; i < 10; i++){
//         var d = new Date();
//         var n = d.toLocaleTimeString();
//         stmt.run(i,n);
//     }

//     stmt.finalize();

//     db.each("SELECT id, dt FROM user", function(err, row){
//         console.log("User id: " + row.id, row.dt);
//     });
// });


