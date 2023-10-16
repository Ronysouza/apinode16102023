
const mysql = require('mysql2')
const connection = mysql.createConnection({
  
    host:'localhost',
    user:'root',
    password:'',
    database:'r7block',


})

connection.connect((error)=>{

    if(error) throw error
    console.log('conectado com sucesso')


})

module.exports = connection
