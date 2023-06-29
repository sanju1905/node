const mysql=require('mysql');
const con=mysql.createConnection(
{
    host:"localhost",
    user:'root',
    password:"",
    database:"website",
    multipleStatements:true,
});
//connection Database
con.connect((err) =>
{
    if(!err)
    {
        console.log("Connection Established");
    }
    else
    {
        console.log(err);
    }
});
// //Create Data base
// let query="";
// query="CREATE DATABASE website";
// con.query(query,(err,result)=>
// {
//     if(!err)

// {
//     console.log("Successfully database created");
// }  
// else
// {
//     console.log(err)
// }
// });
// // //Create Table
// let c="";
// c="CREATE TABLE fruity(name varchar(20), roll int)";
// con.query(c,(err,result)=>
// {
//     if(!err)
//     {
//         console.log("Table created successfully");
//     }
//     else{
//         console.log(err);
//     }
// })
// // Insert data
// let i="" ;
// i="INSERT INTO fruity VALUES('Shalu',41),('nikitha','3')";
// con.query(i,(err,result)=>
// {
//     if(!err)
//     {
//         console.log("Inserted successfully");
//     }
//     else{
//         console.log(err);
//     }
// })

//select data
let d="";
d="SELECT * FROM fruity";
con.query(d,(err,result)=>
{
    if(!err)
    {
        console.log(result);
    }
    else
    {
        console.log(err);
    }
});

module.exports=con; 